import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import MarkAttendance from './components/Markattendance';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Home from "./components/Home";
import Login from "./components/Login";
import StudentProfile from './components/StudentProfile';
import "bootstrap/dist/css/bootstrap.min.css";
import History from './components/History';

function App() {
  const [page, setPage] = useState("home");

  return (
    <Router>
      <Navbar navigate={setPage} />
      <main className="flex-grow">
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/mark-attendance" element={<MarkAttendance />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentProfile />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home navigate={setPage} />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;