import React from "react"
import { useState } from "react"
import "./book-ticket.css"
import { Train, CreditCard, Calendar, Mail, User } from "lucide-react"

export default function BookTicket() {
  const [bookingStep, setBookingStep] = useState<"details" | "payment">("details")
  const [bookingDetails, setBookingDetails] = useState({
    passengerName: "",
    trainId: "",
    travelDate: "",
    email: "",
  })

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  })

  const trains = [
    { id: "TR001", name: "Colombo Express" },
    { id: "TR002", name: "Coastal Line" },
    { id: "TR003", name: "Upcountry Rail" },
    { id: "TR004", name: "Northern Express" },
    { id: "TR005", name: "Hill Country Train" },
  ]

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Payment submitted:", { bookingDetails, paymentDetails })
  }

  return (
    <div className="booking-container">
      <div className="split-layout">
        <div className="image-side">
          <div className="overlay">
            <Train size={48} className="train-icon" />
            <h1>Book Your Journey</h1>
            <p>Secure your seat on Sri Lanka's scenic railways</p>
          </div>
        </div>
        <div className="content-side">
          {bookingStep === "details" ? (
            <div className="form-container">
              <div className="booking-card">
                <div className="booking-header">
                  <h2>Book a Ticket</h2>
                  <p>Fill in your travel details</p>
                </div>
                <form onSubmit={handleBookingSubmit} className="booking-form">
                  <div className="form-group">
                    <label>
                      <User size={16} />
                      Passenger Name
                    </label>
                    <input
                      type="text"
                      value={bookingDetails.passengerName}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, passengerName: e.target.value })}
                      required
                      placeholder="Enter passenger name"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <Train size={16} />
                      Train
                    </label>
                    <select
                      value={bookingDetails.trainId}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, trainId: e.target.value })}
                      required
                    >
                      <option value="">Select a train</option>
                      {trains.map((train) => (
                        <option key={train.id} value={train.id}>
                          {train.name} ({train.id})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>
                      <Calendar size={16} />
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={bookingDetails.travelDate}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, travelDate: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <Mail size={16} />
                      Email
                    </label>
                    <input
                      type="email"
                      value={bookingDetails.email}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    Continue to Payment
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="form-container">
              <div className="booking-card">
                <div className="booking-header">
                  <h2>Payment Details</h2>
                 
                </div>
                <form onSubmit={handlePaymentSubmit} className="booking-form">
                  
                  <button type="submit" className="submit-button">
                    Pay with payPal
                  </button>
                  <button type="button" className="back-button" onClick={() => setBookingStep("details")}>
                    Back to Details
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

