package com.example.registerUser.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userID")
    private int user_ID;
    @Column(name = "firstName")
    private String first_Name;
    @Column(name = "lastName")
    private String last_Name;
    @Column(name = "nicNumber")
    private String nic_Number;
    @Column(name = "mobileNumber")
    private String mobile_Number;
    @Column(name = "email")
    private String Email;
    @Column(name = "address")
    private String Address;
    @Column(name = "password")
    private String Password;
    @Column(name = "userName")
    private String user_Name;

    public int getUser_ID() {
        return user_ID;
    }

    public String getFirst_Name() {
        return first_Name;
    }

    public String getLast_Name() {
        return last_Name;
    }

    public String getNic_Number() {
        return nic_Number;
    }

    public String getMobile_Number() {
        return mobile_Number;
    }

    public String getEmail() {
        return Email;
    }

    public String getAddress() {
        return Address;
    }

    public String getPassword() {
        return Password;
    }

    public String getUser_Name() {
        return user_Name;
    }

    public void setUser_ID(int user_ID) {
        this.user_ID = user_ID;
    }

    public void setFirst_Name(String first_Name) {
        this.first_Name = first_Name;
    }

    public void setLast_Name(String last_Name) {
        this.last_Name = last_Name;
    }

    public void setNic_Number(String nic_Number) {
        this.nic_Number = nic_Number;
    }

    public void setMobile_Number(String mobile_Number) {
        this.mobile_Number = mobile_Number;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public void setUser_Name(String user_Name) {
        this.user_Name = user_Name;
    }
}
