import React, { useState ,useEffect} from 'react'
import AsideLeft from '../components/AsideLeft'
import Header from '../components/Header'
import Axios from 'axios';

function ManageTeam() {
  const [admins, setAdmin] = useState([]);

  const admin =localStorage.getItem('admin');
  console.log(`admin is :${admin}`);

  useEffect(() => {
    Axios.get('http://localhost:8080/admin')
      .then((response) => {
        setAdmin(response.data.admins);
        console.log(response.data.admins);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  return (
    <div>
    <div className='row d-flex' id='dashboard'>
            <div className='col-md-2 aside-left'>
              <AsideLeft />
            </div>
            <div className='col-md-10 main' style={{minHeight: "100vh"}}>
              <Header/>
            <h1>Manage Team</h1>
            {
              admin==="superadmin"?
              (
              <table className="table" id='user-table'>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Role</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin,index) => (
                    <tr key={admin._id}>
                      <th scope="row"></th>
                      <td>{admin.username}</td>
                      <td><img src={admin.avatar} alt={admin.username}  id='avatarUserTable' /></td>
                      <td>{admin.role}</td>
                      <td>{admin.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              ):
              <div>there is no permission</div>
            }
            </div>
          </div>
          </div>
  )
}

export default ManageTeam
