import React from "react"
import { useState } from "react"
import "./trains.css"
import { Train, Clock, MapPin, Search } from "lucide-react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Trains() {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    time: "",
  })

  const locations = ["Colombo", "Kandy", "Galle", "Badulla", "Jaffna", "Nuwara Eliya"]
  const times = ["Morning (6AM-12PM)", "Afternoon (12PM-6PM)", "Evening (After 6PM)"]

  const availableTrains = [
    { id: 1, name: "Colombo Express", from: "Colombo", to: "Kandy", departure: "08:30 AM", arrival: "11:30 AM" },
    { id: 2, name: "Coastal Line", from: "Colombo", to: "Galle", departure: "09:00 AM", arrival: "11:45 AM" },
    { id: 3, name: "Upcountry Rail", from: "Kandy", to: "Badulla", departure: "10:30 AM", arrival: "05:30 PM" },
    { id: 4, name: "Northern Express", from: "Colombo", to: "Jaffna", departure: "07:00 AM", arrival: "05:00 PM" },
    {
      id: 5,
      name: "Hill Country Train",
      from: "Colombo",
      to: "Nuwara Eliya",
      departure: "06:45 AM",
      arrival: "01:30 PM",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching with params:", searchParams)
  }

  return (
    <div className="trains-container">
      <div className="split-layout">
        <div className="image-side">
          <div className="overlay">
            <Train size={48} className="train-icon" />
            <h1>Available Trains</h1>
            <p>Explore Sri Lanka's scenic routes by rail</p>
          </div>
        </div>
        <div className="content-side">
          
          <div className="trains-list">
            {availableTrains.map((train) => (
              <div key={train.id} className="train-card">
                <div className="train-info">
                  <h3>{train.name}</h3>
                  <div className="train-details">
                    <div className="route-info">
                      <MapPin size={16} />
                      <span>
                        {train.from} to {train.to}
                      </span>
                    </div>
                    <div className="time-info">
                      <Clock size={16} />
                      <span>
                        {train.departure} - {train.arrival}
                      </span>
                    </div>
                  </div>
                </div>
                  <Link to="/bookTicket" className="nav-link mx-3">  <button className="book-button">Book Now</button></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

