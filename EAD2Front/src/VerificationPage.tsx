// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./VerificationPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { userID, otp } = location.state || {};
  //alert(userID);
  //alert(otp); //to test only
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value); // Directly update the code value
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted code:", code);
   if(code == otp){
    navigate("/dashboard");
   }else{
    alert("Verification code is invalid. please try again" + code + ":" + otp);
   }
    // navigate("/dashboard");
  };

  return (
    <div className="verification-container">
      <div className="verification-card">
        <h1 className="header">Verify Your Account</h1>
        <p>We've sent a 6-digit code to your email. Please enter it below.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={handleChange}
            className="verification-input"
            placeholder="Enter code"
            required
          />
          <button type="submit" className="submit-button">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;
