import React from 'react';
import admine from '../assets/admindash.png';

function Jumpotron({ name }) {
  return (
    <div id='jumpotron' className='card1'>
      <div className='text'>
        <h2>Welcome {name}! 🎉</h2>
        <p>You have done 72% 🤩 more sales today.
        Check your new raising badge in your profile.</p>
      </div>
      <div className='image'>
        <img
        src={admine}
        alt='admin'/>
      </div>
    </div>
  )
}

export default Jumpotron;
