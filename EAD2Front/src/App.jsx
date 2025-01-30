import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import CreateAccount from "./CreateAccount"
import Login from "./logIn"
import Trains from "./Trains"
import Contact from "./Contact"
import Header from "./components/Header"
import BookTicket from "./BookTicket"
import Dashboard from "./Dashboard"
import VerificationPage from "./VerificationPage"

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/trains" element={<Trains />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookTicket" element={<BookTicket />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verificationPage" element={<VerificationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

