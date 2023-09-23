import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../App.css';
import logo from '../assets/logo-signup.svg'
function Auth() {
  return (
    <div>
      <Registration />
    </div>
  );
}

const Registration = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('*Username is required').matches(/^[A-Za-z]+$/, 'Username must not contain numbers'),
    password: Yup.string()
      .required('*Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(/^(?=.*[!@#$%^&*])[A-Z0-9][a-zA-Z0-9!@#$%^&*]+$/, 'Password must start with a capital letter, contain at least one special character, and can include numbers'),
    email: Yup.string().required('*Email is required').email('*Invalid email address'),
  });
  

  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      // Replace the axios post with your registration API endpoint
      await axios.post('http://localhost:8080/register', {
        username: values.username,
        password: values.password,
        email: values.email,
      });
      localStorage.setItem('User',values.username);
      // Registration successful
      navigate('/signin'); // Redirect to login page after successful registration
    } catch (error) {
      // Handle other errors if needed
      setErrorMessage('An error occurred. Please try again later.');
    }

    setSubmitting(false);
  };

  return (
    <div className='background'>
        <div className='registerForm card1'>
        <Formik
        initialValues={{ username: '', password: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
          <img
          src={logo}
          alt='logo'/>
            <h2>Welcome to Medica! 👋🏻</h2>
            {/* <p id='textRegister'>Please sign-in to your account and start the adventure</p> */}
            <div className="form-group" style={{width:'100%'}}>

              <Field type="text" id="username" name="username" placeholder='Username' className='editInputRegister' />
              <ErrorMessage name="username" component="div" className="error" />

              <Field type="email" id="email" name="email" placeholder='Email' className='editInputRegister' />
              <ErrorMessage name="email" component="div" className="error" />

              <Field type="password" id="password" name="password" placeholder='Password' className='editInputRegister' />
              <ErrorMessage name="password" component="div" className="error" />

              <button type="submit" disabled={isSubmitting} className='button'>
                Register
              </button>
            </div>
              <div id='redirectSignIn'><p>Already have an account? </p><Link to ='/signin'> SignIn Instead</Link></div>
          </Form>
        )}
        </Formik>

        </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};
export default Auth;
