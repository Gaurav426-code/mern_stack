// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admindashboard from "./Admin/Dashboard/Admin_dashboard";
import Mainpage from"./Mainpage";
import Dashboard from"./User/UserDashboard/Userdas";
import AdminPage from "./Admin/Auth/Adminpage";
import Forgot from"./Admin/Auth/Forgotpassword/Forgot";
import UserPage from "./User/auth/User";
import UserRegister from"./User/auth/Register";
import Guestauth from"./Guest/auth/Guest";
import GuestRegister from"./Guest/auth/GuestRegister";
import Guestdash from"./Guest/GuestDashboard/Guestdas";



const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="" element={<Mainpage/>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admindashboard" element={<Admindashboard/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/userregister" element={<UserRegister/>} />
        <Route path="/guestdashboard" element={<Guestdash/>} />
        <Route path="/auth" element={<Guestauth/>} />
        <Route path="/guestregister" element={<GuestRegister/>} />
       </Routes>
    </Router>
  );
};

export default App;