import React,{useState,useEffect} from 'react'

import AsideLeft from '../components/AsideLeft';
import Header from '../components/Header';
import Jumpotron from '../components/Jumpotron';
import Cards from '../components/Cards'
import axios from 'axios';

// import Aside from '../components/Aside';

function Profile() {
  const [data, setData] = useState([]);
 const userId= localStorage.getItem('userID');
//  useEffect(()=>{
//   const getUser= async ()=>{
//     try{
//       const responseUser = await axios.get(`/api/users/${userId}`)
//       setData(responseUser.data)
//     }catch(error){
//     console.log(error);
//     }
//   }
//   getUser();
//  },[])

  return (
      <div className='row d-flex m-0' id='dashboard'>
        <div className='col-md-2 aside-left'>
          {/* <AsideLeft /> */}
          <AsideLeft/>
        </div>
        <div className='col-md-10 main'>
          <Header/>
          <Jumpotron />
          <Cards />
        </div>
      </div>
  )
}

export default Profile
//you get the name of the user from the local storage that come from register page this make a problem when user is go to the login direct 
//there is now name come from the local storage the solution I think is better you get the name of the user from the database 
//search on the email and get the document of it then you can use it without problem.