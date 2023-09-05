import React from 'react'
import AsideLeft from '../components/AsideLeft'
import Header from '../components/Header'
function UsersTable() {
  return (
    <div>
<div className='row d-flex' id='dashboard'>
  <div className='col-md-2 aside-left'>
    <AsideLeft />
  </div>
  <div className='col-md-10 main'>
    <Header/>
    <div id='tableDiv'>
    <h3 id='userTable'>Users</h3>
    <table class="table" id='user-table'>
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Date</th>
      <th scope="col">Health Issue</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Male</td>
      <td>mark@mark.com</td>
      <td>20/12/2015</td>
      <td>Rohmotuied</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Majd</td>
      <td>Female</td>
      <td>mark@mark.com</td>
      <td>20/12/2015</td>
      <td>Rohmotuied</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ayar</td>
      <td>Female</td>
      <td>mark@mark.com</td>
      <td>20/12/2015</td>
      <td>Rohmotuied</td>
    </tr>
  </tbody>
    </table>
    </div>
  </div>
  </div>
</div>
  )
}

export default UsersTable
