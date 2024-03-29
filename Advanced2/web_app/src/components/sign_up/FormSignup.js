import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Form.css";

const FormSignup = (props) => {
  const { handleCheckBox, deletePaste, handleChange, handleSubmit, values, errors } = useForm(
    props.submitForm,
    validate,
    props.userMessage,
  );
  function handleImage() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = "image/png, image/gif, image/jpeg";
    input.click();
    input.onchange = e => {
        values.img =  URL.createObjectURL((e.target.files[0]));
    }
  }
  function togglePassword() {
    var passwordInput = document.getElementById("passwordInput");
    var eye = document.getElementById("passwordEye")
    if (passwordInput.value != '') {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eye.className = "fa fa-eye-slash"
      } else {
        passwordInput.type = "password";
        eye.className = "fa fa-eye"
      }
    }
  }

  function toggleConfirmPassword() {
    var passwordInput = document.getElementById("ConfirmPasswordInput");
    var eye = document.getElementById("ConfirmPasswordEye")
    if (passwordInput.value != '') {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eye.className = "fa fa-eye-slash"
      } else {
        passwordInput.type = "password";
        eye.className = "fa fa-eye"
      }
    }
  }

  return (
    <div className="form-content-right">
    
      <form onSubmit={handleSubmit} className="form form-scroll" noValidate>
      <p className="form-inputs text-primary text-center display-6">
          Get started with us !
        </p>

        <p className="form-inputs text-white">Username</p>
        <div className="form-inputs input-group form-group">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        {errors.username && <p className="form-inputs text-danger">{errors.username}</p>}


        <p className="form-inputs text-white">Email</p>
        <div className="form-inputs input-group form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="form-inputs text-danger">{errors.email}</p>}

        <p className="form-inputs text-white">Password</p>
        <div className="form-inputs input-group form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            id="passwordInput"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          <span className="input-group-text"><i id="passwordEye" className="fa fa-eye" onClick={togglePassword}></i></span>
        </div>
        {errors.password && <p className="form-inputs text-danger">{errors.password}</p>}

        <p className="form-inputs text-white">Confirm Password</p>
        <div className="form-inputs input-group form-group">
          <input
            className="form-control"
            id="ConfirmPasswordInput"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onPaste={deletePaste}
            onChange={handleChange}
          />
          <span className="input-group-text"><i id="ConfirmPasswordEye" className="fa fa-eye" onClick={toggleConfirmPassword}></i></span>
        </div>
        {errors.password2 && <p className="form-inputs text-danger">{errors.password2}</p>}

        <p className="form-inputs text-white">Profile Picture (optional)</p>
        <div className="btn btn-outline-primary "><i className="fa fa-image" onClick={handleImage}></i></div>
        <br/>
        
        <div className="h6">
          <label className="form-label">
            <input type="checkbox" name="terms" onChange={handleCheckBox}></input>

            &nbsp;I agree to the&nbsp;
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              Terms of Service
            </a>
          </label>
          {errors.terms && <p className="form-inputs text-danger">{errors.terms}</p>}
        </div>

        <button className="form-input-btn" type="submit" >
          Sign up
        </button>
        <span className="h6 form-input-login">
          Already have an account? Login <Link to="/">here</Link>
        </span>

      </form>
    </div>
  );
};

export default FormSignup;