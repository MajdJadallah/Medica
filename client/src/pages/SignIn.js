import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';
import { useCookies } from 'react-cookie';
import logo from '../assets/logo-signup.svg'
import { Link} from 'react-router-dom';

function SignIn() {
  return (
    <div>
      <Login />
    </div>
  );
}

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [cookies, setCookie] = useCookies(['access_token']); // Use cookies
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('*Email is required').email('*Invalid email address'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[!@#$%^&*])[A-Z][a-zA-Z!@#$%^&*]+$/,
        'Password must start with a capital letter, contain at least one special character, and no numbers'
      ),
  });


  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: values.email,
        password: values.password,
      });

      if (response.data.token && response.data.adminId) {
        // Store user ID in local storage
        localStorage.setItem('userID', response.data.adminId);
        const user = localStorage.getItem('User');
        navigate(`/profile/${user}`);
      } else {
        setErrorMessage('Username or password is incorrect.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }

    setSubmitting(false);
  };

  return (
    <div id='formLogin'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <div className='registerForm card1'>
          <Form >
          <img
          src={logo}
          alt='logo'/>
            <h2>Welcome back! 👋🏻</h2>
            <div className="form-group" style={{width:'100%'}}>
              <Field type="text" id="email" name="email" placeholder='Email' />
              <ErrorMessage name="email" component="div" className="error" />

              <Field type="password" id="password" name="password" placeholder='Password' />
              <ErrorMessage name="password" component="div" className="error" />

              <button type="submit" disabled={isSubmitting} className='button'>
                Sign In
              </button>
            </div>
            <div id='redirectSignIn'><p>Don't have an account? </p><Link to ='/'> Sign Up Instead</Link></div>

          </Form>
          </div>
        )}
      </Formik>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default SignIn;
