import React from 'react'
import sun from '../assets/sun.svg'
import settings from '../assets/settings.svg'
import user from '../assets/user.png'
import search from '../assets/search.svg'
function Header() {
  return (
    <div id='nav' className='card1'>
      <div className="search">
      <img
      src={search}
      alt='search'
      />
        <input
        type='text'
        placeholder='search'
        id='search-div'
        />
      </div>
      <div className='settings-nav'>
      <img src={sun}
        alt='sun'
        />
        <img src={settings}
        alt='setting'
        />
        <img src={user}
        alt='user'
        id='user'
        />
      </div>
        
    </div>
  )
}

export default Header
