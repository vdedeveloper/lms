import React, { useState } from 'react';
import './FeeStructure.css';
import { FaEdit } from 'react-icons/fa'; // Import edit icon

const FeeStructure = () => {
  // Select Role
  const [selectrole, setSelectRole] = useState('');

  // Fee Structure Details
  const [feestructure, setFeeStructure] = useState([
    { name: 'John Doe', course: 'BIM Basic (ACS)', fees: '30,000/-', paid: '15,000/-', pendingamount: '15,000/-', mode: 'Online', status: 'Pending' },
    { name: 'Subbarao Attada', course: 'BIM Professional (MEP)', fees: '45,000/-', paid: '45,000/-', pendingamount: '0', mode: 'Cash', status: 'Completed' },
    { name: 'Alex Johnson', course: 'BIM Master (ACS)', fees: '75,000/-', paid: '50,000/-', pendingamount: '25,000/-', mode: 'Online', status: 'Pending' },
    { name: 'Mohammad Adnan', course: 'Interior Design', fees: '30,000/-', paid: '30,000/-', pendingamount: '0', mode: 'Bank Transfer', status: 'Completed' },
    { name: 'Michael Brown', course: 'Digital Marketing', fees: '25,000/-', paid: '5,000/-', pendingamount: '20,000/-', mode: 'Online', status: 'Pending' },
  ]);

  // State for Modal
  const [isEditing, setIsEditing] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);

  // Open Modal
  const handleEdit = (index) => {
    setCurrentEdit({ ...feestructure[index], index });
    setIsEditing(true);
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdit({ ...currentEdit, [name]: value });
  };

  // Save Changes
  const handleSave = () => {
    const updatedFeeStructure = [...feestructure];
    updatedFeeStructure[currentEdit.index] = { ...currentEdit };
    delete updatedFeeStructure[currentEdit.index].index;
    setFeeStructure(updatedFeeStructure); // Correct function
    setIsEditing(false);
  };

  return (
    <div className="main-section">
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Fee Details</h3>
          <p>Here is your fee details</p>
        </div>
      </div>

      {/* Table Section */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Fees</th>
              <th>Fees Paid</th>
              <th>Pending Amount</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {feestructure.map((feestructure, index) => (
              <tr key={index} className={feestructure.status === 'Pending' ? 'active-row' : ''}>
                <td>{feestructure.name}</td>
                <td>{feestructure.course}</td>
                <td>{feestructure.fees}</td>
                <td>{feestructure.paid}</td>
                <td>{feestructure.pendingamount}</td>
                <td>{feestructure.mode}</td>
                <td>{feestructure.status}</td>
                <td>
                  <FaEdit
                    className="edit-icon"
                    onClick={() => handleEdit(index)}
                    title="Edit"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Section */}
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <label>
              Paid Fees:
              <input
                type="text"
                name="paid"
                value={currentEdit.paid}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeeStructure;
