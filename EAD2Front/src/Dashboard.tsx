import React from "react"
import { useState } from "react"
import "./dashboard.css"
import { User, Ticket, History, Plus, Settings, LogOut, Edit2, X, Calendar, MapPin, Clock } from "lucide-react"

type TabType = "tickets" | "history" | "book" | "account"

interface UserData {
  first_Name: string
  last_Name: string
  email: string
  mobile_Number: string
  address: string
  user_Name: string
  password: string
  nic_Number: string
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("tickets")
  const [updateStatus, setUpdateStatus] = useState<{ success?: string; error?: string }>({})
  const [formData, setFormData] = useState<UserData>({
    first_Name: "Raveen",
    last_Name: "Jayasanka",
    email: "raveenjayasanka41@gmail.com",
    mobile_Number: "+94 778733391",
    address: "No 47 Bauddhaloka Mawatha, Kurunegala",
    user_Name: "raveen",
    password: "",
    nic_Number: "",
  })

  const [upcomingTickets, setUpcomingTickets] = useState([
    {
      id: "T001",
      train: "Colombo Express",
      from: "Colombo",
      to: "Kandy",
      date: "2025-02-01",
      time: "08:30 AM",
      status: "Confirmed",
    },
    {
      id: "T002",
      train: "Coastal Line",
      from: "Colombo",
      to: "Galle",
      date: "2025-02-15",
      time: "09:00 AM",
      status: "Pending",
    },
  ])

  const ticketHistory = [
    {
      id: "T003",
      train: "Northern Express",
      from: "Colombo",
      to: "Jaffna",
      date: "2025-01-15",
      time: "07:00 AM",
      status: "Completed",
    },
    {
      id: "T004",
      train: "Upcountry Rail",
      from: "Kandy",
      to: "Badulla",
      date: "2025-01-10",
      time: "10:30 AM",
      status: "Cancelled",
    },
  ]

  const handleCancelTicket = (ticketId: string) => {
    setUpcomingTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== ticketId))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdateStatus({})

    try {
      const response = await fetch(`http://localhost:8090/user/UpdateData/1`, {
        // Replace 1 with actual user ID
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to update profile")
      }

      const result = await response.json()
      setUpdateStatus({ success: "Profile updated successfully!" })
    } catch (error) {
      setUpdateStatus({ error: "Failed to update profile. Please try again." })
    }
  }

  const renderAccountSection = () => (
    <div className="dashboard-content">
      <div className="content-header">
        <h2>Account Settings</h2>
        <p>Manage your personal information</p>
      </div>
      {updateStatus.success && <div className="alert alert-success">{updateStatus.success}</div>}
      {updateStatus.error && <div className="alert alert-error">{updateStatus.error}</div>}
      <form onSubmit={handleUpdateProfile} className="account-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first_Name">First Name</label>
            <input
              type="text"
              id="first_Name"
              name="first_Name"
              value={formData.first_Name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_Name">Last Name</label>
            <input
              type="text"
              id="last_Name"
              name="last_Name"
              value={formData.last_Name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="user_Name">Username</label>
            <input
              type="text"
              id="user_Name"
              name="user_Name"
              value={formData.user_Name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nic_Number">NIC Number</label>
            <input
              type="text"
              id="nic_Number"
              name="nic_Number"
              value={formData.nic_Number}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter new password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile_Number">Phone Number</label>
          <input
            type="tel"
            id="mobile_Number"
            name="mobile_Number"
            value={formData.mobile_Number}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} />
        </div>
        <button type="submit" className="update-button">
          Update Profile
        </button>
      </form>
    </div>
  )

  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <div className="user-profile">
            <div className="profile-image">
              <User size={32} />
            </div>
            <div className="profile-info">
              <h3>Raveen Jayasanka</h3>
              <p>raveenjayasanka41@gmail.com</p>
            </div>
          </div>
          <nav className="dashboard-nav">
            <button
              className={`nav-button ${activeTab === "tickets" ? "active" : ""}`}
              onClick={() => setActiveTab("tickets")}
            >
              <Ticket size={20} />
              Current Tickets
            </button>
            <button
              className={`nav-button ${activeTab === "history" ? "active" : ""}`}
              onClick={() => setActiveTab("history")}
            >
              <History size={20} />
              Ticket History
            </button>
            <button
              className={`nav-button ${activeTab === "book" ? "active" : ""}`}
              onClick={() => setActiveTab("book")}
            >
              <Plus size={20} />
              Book New Ticket
            </button>
            <button
              className={`nav-button ${activeTab === "account" ? "active" : ""}`}
              onClick={() => setActiveTab("account")}
            >
              <Settings size={20} />
              Account Settings
            </button>
          </nav>
          <a href="/" className="logout-button">
            <LogOut size={20} />
            Logout
          </a>
        </aside>

        <main className="dashboard-main">
          {activeTab === "tickets" && (
            <div className="dashboard-content">
              <div className="content-header">
                <h2>Current Tickets</h2>
                <p>Manage your upcoming train journeys</p>
              </div>
              <div className="tickets-grid">
                {upcomingTickets.map((ticket) => (
                  <div key={ticket.id} className="ticket-card">
                    <div className="ticket-header">
                      <h3>{ticket.train}</h3>
                      <span className={`ticket-status ${ticket.status.toLowerCase()}`}>{ticket.status}</span>
                    </div>
                    <div className="ticket-details">
                      <div className="detail-item">
                        <MapPin size={16} />
                        <span>
                          {ticket.from} to {ticket.to}
                        </span>
                      </div>
                      <div className="detail-item">
                        <Calendar size={16} />
                        <span>{ticket.date}</span>
                      </div>
                      <div className="detail-item">
                        <Clock size={16} />
                        <span>{ticket.time}</span>
                      </div>
                    </div>
                    <div className="ticket-actions">
                      
                      <button className="action-button cancel" onClick={() => handleCancelTicket(ticket.id)}>
                        <X size={16} />
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div className="dashboard-content">
              <div className="content-header">
                <h2>Ticket History</h2>
                <p>View your past train journeys</p>
              </div>
              <div className="tickets-grid">
                {ticketHistory.map((ticket) => (
                  <div key={ticket.id} className="ticket-card">
                    <div className="ticket-header">
                      <h3>{ticket.train}</h3>
                      <span className={`ticket-status ${ticket.status.toLowerCase()}`}>{ticket.status}</span>
                    </div>
                    <div className="ticket-details">
                      <div className="detail-item">
                        <MapPin size={16} />
                        <span>
                          {ticket.from} to {ticket.to}
                        </span>
                      </div>
                      <div className="detail-item">
                        <Calendar size={16} />
                        <span>{ticket.date}</span>
                      </div>
                      <div className="detail-item">
                        <Clock size={16} />
                        <span>{ticket.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "account" && renderAccountSection()}

          {activeTab === "book" && (
            <div className="dashboard-content">
              <div className="content-header">
                <h2>Book New Ticket</h2>
                <p>Plan your next journey</p>
              </div>
              <button className="book-new-button" onClick={() => (window.location.href = "/bookTicket")}>
                <Plus size={20} />
                Book a New Ticket
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

