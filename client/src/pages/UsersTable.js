import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import AsideLeft from '../components/AsideLeft';
import Header from '../components/Header';

function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8080/api/users')
      .then((response) => {
        setUsers(response.data.users);
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
        <div className='col-md-10 main'>
          <Header />
          <div id='tableDiv'>
            <h3 id='userTable'>Users</h3>
            {users.length > 0 ? (
              <table className="table" id='user-table'>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Health Issue</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user,index) => (
                    <tr key={user.id}>
                      <th scope="row"></th>
                      <td>{user.username}</td>
                      <td><img src={user.avatar} alt={user.username}  id='avatarUserTable' /></td>
                      <td>{user.gender}</td>
                      <td>{user.email}</td>
                      <td>{user.date}</td>
                      <td>{user.health_issue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
