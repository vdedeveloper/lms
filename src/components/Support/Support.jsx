import React, { useState } from 'react'
import './Support.css'

const Support = () => {
  // Select Role
  const [selectrole, setSelectRole] = useState('');    

  // Role Change
  const roleChange = (event) => {
    setSelectRole(event.target.value);  
  };

  // Support Details
  const support = [
    { name: 'John Doe', text: 'I am getting course error', sender: 'Student', fee: 'Pending'},
    { name: 'Subbarao Attada', text: 'Credentials are disabled', sender: 'Trainer', fee: 'Completed'},
    { name: 'Alex Johnson', text: 'cannot access recorded videos', sender: 'Student', fee: 'Pending'},
    { name: 'Mohammad Adnan', text: 'Credentials are disabled', sender: 'Trainer', fee: 'Completed'},
    { name: 'Michael Brown', text: 'cannot access recorded videos', sender: 'Student', fee: 'Pending'},
  ];

  return (
    <div className='main-section'>
      {/* Table Section */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Issue Detail</th>
              <th>Sender</th>
              <th>Status</th>
            </tr>
          </thead>
          <br />
          <tbody>
            {support.map((learner, index) => (
              <tr key={index} className={learner.fee === 'Pending' ? 'active-row' : ''}>
                <td>{learner.name}</td>
                <td>{learner.text}</td>
                <td>{learner.sender}</td>
                <td>{learner.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Support
