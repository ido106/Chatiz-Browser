import React from "react";
import "./Form.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">Thank you for joining us!
      <br/>
      <Link to='/' className="form-success">Sign In</Link>
      </h1>
      
      <img className="form-img-2" src="img/img-3.svg" alt="success-image" />
    </div>
  );
};

export default FormSuccess;