import React from 'react'
import AsideLeft from '../components/AsideLeft'
import Header from '../components/Header'

function ManageTeam() {
  return (
    <div>
    <div className='row d-flex' id='dashboard'>
            <div className='col-md-2 aside-left'>
              <AsideLeft />
            </div>
            <div className='col-md-10 main'>
              <Header/>
            <h1>Manage Team</h1>
            </div>
          </div>
          </div>
  )
}

export default ManageTeam
