import React from "react"
import { useState } from "react"
import "./create-account.css"
import { Train } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function CreateAccount() {
  const navigate = useNavigate();
  const [veriCode, setVeriCode] = useState("");
  const [formData, setFormData] = useState({
    userid: "",
    address: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    mobile_number: "",
    nic_number: "",
    user_name: "",
  })
  async function sendMail(mail,id){
    try {
      const response2 = await fetch(`http://localhost:8070/user/sendVerificationMail/${mail}/${id}`);
      if (!response2.ok) {
        throw new Error(`HTTP error! status: ${response2.status}`);
      }
      const result3 = await response2.json();
      console.log(result3);
    } catch (err) {
      //alert("error occured (Mail)");
    }
  }
  
  async function verificationCode(){
    try {
      const response3 = await fetch("http://localhost:8070/user/getVerificationToFront");
      if (!response3.ok) {
        throw new Error(`HTTP error! status: ${response3.status}`);
      }
      const result4 = await response3.json();
      setVeriCode(JSON.stringify(result4));//FIXME: FIX THE VERIFICATION CODE BUG
      console.log("passed" + result4);
      return result4;
    } catch (err) {
     // alert("error occured (Mail)");
    }
  }
  async function postData(fname,lname,nic_number,mobile,mail,address,password,userName){
    const response = await fetch("http://localhost:8090/test/registerUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "first_Name": fname,
          "last_Name": lname,
          "nic_Number": nic_number,
          "mobile_Number": mobile,
          "email": mail,
          "address": address,
          "password": password,
          "user_Name": userName
        }),
    }); 
    const result = await response.json();
   // console.log(result.userID);
    sendMail(result.email,result.userID);
    var test1 = await verificationCode();
    console.log(test1);
    if(response.ok){
      navigate("/verificationPage", { 
        state: {userID: result.userID, otp: test1} 
      });
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    postData(formData.first_name,formData.last_name,formData.nic_number,formData.mobile_number,formData.email,formData.address,formData.password,formData.user_name);
   
      
    /*if(formData.first_name == ''){
      alert("ok");
    }*/
   // alert(formData.address);
  }

  return (
    <div className="create-account-container">
      <div className="hero-section">
        <div className="hero-content">
          <Train size={48} className="hero-icon" />
          <h1>Start Your Journey</h1>
          <p>Scroll down to continue</p>
        </div>
      </div>
      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-header">
            <h2>Create Your Account</h2>
            <p>Fill in your details to get started</p>
          </div>
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_name">Username</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="johndoe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="userid">User ID</label>
              <input
                type="text"
                id="userid"
                name="userid"
                value={formData.userid}
                onChange={handleChange}
                placeholder="SLRW123"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile_number">Mobile Number</label>
              <input
                type="tel"
                id="mobile_number"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                placeholder="+94 XX XXX XXXX"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nic_number">NIC Number</label>
              <input
                type="text"
                id="nic_number"
                name="nic_number"
                value={formData.nic_number}
                onChange={handleChange}
                placeholder="123456789V"
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Station Road, Colombo"
                required
              />
            </div>
            <button type="submit" className="submit-button full-width">
              Start Your Journey
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

