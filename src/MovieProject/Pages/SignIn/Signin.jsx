import React, { useRef, useState } from 'react';
import './Signin.scss';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Signin = () => {
  const form = useRef();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // Yup Validation Schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Validate using Yup
      await schema.validate(value, { abortEarly: false });
      setErrors({});  // clear errors if validation passed
      
      // Send email
      await emailjs.sendForm(
        'service_elq7tiz',
        'template_k3xtqpu',
        form.current,
        '5WImgzBB2rkR6j5Vz'
      );
      setValue({ email: "", password: "" });
      form.current.reset();
      navigate('/');
    } catch (err) {
      if (err.inner) {
        const formErrors = {};
        err.inner.forEach((e) => {
          formErrors[e.path] = e.message;
        });
        setErrors(formErrors);
      }
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-title">Sign In</h1>

        <form ref={form} onSubmit={sendEmail} className="signin-form" autoComplete="off">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="signin-input"
            value={value.email}
            onChange={handleChange}
            autoComplete='new email'
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signin-input"
            value={value.password}
            onChange={handleChange}
            autoComplete='new password'
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;