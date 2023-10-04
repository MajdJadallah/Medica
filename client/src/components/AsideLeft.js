import React from 'react'
import { Link } from 'react-router-dom'
import medica from '../assets/medica.svg'
import home from '../assets/home.svg'
import table from '../assets/table.svg'
import profile from '../assets/profile.svg'
import logout from '../assets/logout.svg'
import signin from '../assets/login.svg'
import signup from '../assets/signup.svg'
import FAQ from '../assets/faq.svg'
import manage from '../assets/manage.svg'


import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function AsideLeft({ role }) {

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
    const { username } = useParams();

    const userId=localStorage.getItem("userID");
    const removeLocalStorage=()=>{
      localStorage.removeItem('User');
      localStorage.removeItem('userID');
      removeCookie('access_token', { path: '/' });
      navigate('/signin');
    }


  return (
    <div className="aside">
    <Link to='/dashboard' className="logo">
      <img src={medica} alt='logo' />
    </Link>
    <div id='list-items'>
    <ul>
        <li>
          <div className="item-asiede">
            <img src={home} alt='home'/>
            <Link to ='/dashboard' id='span'>Dashboard</Link>
          </div>
        </li>
        <li>
          <div className="item-asiede">
            <img src={table} alt='home'/>
            <Link to ='/usertable' id='span'>users</Link>
          </div>
        </li>
        <li>
        <div className="item-asiede">
            <img src={manage} alt='home'/>
            <Link to='/manageteam' id='span'>Manage team</Link>
          </div>
        </li>
        <li>
        <div className="item-asiede">
            <img src={FAQ} alt='home'/>
            <Link to ='/faq' id='span'>FAQ</Link>
          </div>
        </li>
        <li>
        <div className="item-asiede">
            <img src={profile} alt='home'/>
            <Link to='/profile' id='span'>Profile Form</Link>
          </div>
        </li>
        <li>
        <div className="item-asiede">
            <img src={signin} alt='home'/>
            <Link to ='/signin' id='span'>Sign In</Link>
          </div>
        </li>
        <li>
        <div className="item-asiede">
            <img src={signup} alt='home'/>
            <Link to ='/' id='span'>Sign Up</Link>
          </div>
        </li>
    </ul>
    </div>


    <div className="logout">
    <button onClick={removeLocalStorage} className='logout'>
    <img src={logout} alt='logout'/>
    Log Out</button>
    </div>
    </div>
  )
}

export default AsideLeft
