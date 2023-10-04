import React, { useState, useEffect } from 'react';
import AsideLeft from '../components/AsideLeft';
import Header from '../components/Header';
import Jumpotron from '../components/Jumpotron';
import Cards from '../components/Cards';
import axios from 'axios';

function Profile() {
  const [data, setData] = useState({});
  const userId = localStorage.getItem('userID');

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/admin/${userId}`);
        setData(response.data.user);
        localStorage.setItem('admin',response.data.user.role);
        console.log(response.data.user.role); // Log user data
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [userId]);

  const username = data.username || '';

  return (
    <div className='row d-flex m-0' id='dashboard'>
      <div className='col-md-2 aside-left'>
        <AsideLeft />
      </div>
      <div className='col-md-10 main'>
        <Header />
        <Jumpotron name={username} />
        <Cards />
      </div>
    </div>
  );
}

export default Profile;
  