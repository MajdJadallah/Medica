import React from 'react'
import userIcon from '../assets/users.svg'
import doctors from '../assets/doctor.svg'
import hospital from '../assets/hospital.svg'
import podcast from '../assets/podcast.svg'
function Cards() {
  return (
    <div className='cardRow'>
      <div className="card1">
        <h3 className="cardTitle">Users</h3>
        <div className='iconText'>
        <div id='users-icon-div' className='iconCard'>
            <img
            src={userIcon}
            alt='usersIcon'
            />
        </div>
        <p>4K</p>
        </div>
      </div>
      <div className="card1">
      <h3 className="cardTitle">Doctors</h3>
      <div className='iconText'>
      <div id='doctors-icon-div' className='iconCard'>
            <img
            src={doctors}
            alt='usersIcon'
            />
        </div>
      <p>4K</p>
      </div>

      </div>
      <div className="card1">
      <h3 className="cardTitle">Hospitals</h3>
      <div className='iconText'>
      <div id='hospitals-icon-div' className='iconCard'>
            <img
            src={hospital}
            alt='usersIcon'
            />
        </div>
      <p>300</p>
      </div>

      </div>
      <div className="card1">
      <h3 className="cardTitle">Podcast</h3>
      <div className='iconText'>
      <div id='podcats-icon-div' className='iconCard'>
            <img
            src={podcast}
            alt='usersIcon'
            />
        </div>
      <p>10K</p>
      </div>

      </div>
    </div>
  )
}

export default Cards
