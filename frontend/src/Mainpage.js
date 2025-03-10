import React from 'react';
import{Link}  from"react-router-dom";
import './Mainpage.css';

const LoginPage = () => {

  return (
    <div className="login-page">
    <div className="buttons-container">
      <header className="login-header">
        <h1>AI Multi-Login Portal</h1>
        <p>Select your login type</p>
     <Link to="./admin"><button>Admin Login</button></Link>
     <Link to="./user"><button >User Login</button></Link>
     <Link to="./auth"><button >Guest Login</button></Link>
        </header>
        </div>
      </div>
        
  );
};

export default LoginPage;
