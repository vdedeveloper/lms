import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa'; // Import edit icon

const BatchProject = () => {
  // Select Role
  const [selectrole, setSelectRole] = useState('');

  // Assignment Details
  const [support, setSupport] = useState([
    { name: 'John Doe', topic: 'Create a wall 5.5mm', view: '', remark: '0/10', status: 'No' },
    { name: 'Subbarao Attada', topic: 'Create a wall 5.5mm', view: '', remark: '8/10', status: 'Completed' },
    { name: 'Alex Johnson', topic: 'Create a wall 5.5mm', view: '', remark: '0/10', status: 'No' },
    { name: 'Mohammad Adnan', topic: 'Create a wall 5.5mm', view: '', remark: '7/10', status: 'Completed' },
    { name: 'Michael Brown', topic: 'Create a wall 5.5mm', view: '', remark: '0/10', status: 'No' },
  ]);

  // State for Modal
  const [isEditing, setIsEditing] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);

  // Open Modal
  const handleEdit = (index) => {
    setCurrentEdit({ ...support[index], index });
    setIsEditing(true);
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdit({ ...currentEdit, [name]: value });
  };

  // Save Changes
  const handleSave = () => {
    const updatedSupport = [...support];
    updatedSupport[currentEdit.index] = { ...currentEdit };
    delete updatedSupport[currentEdit.index].index;
    setSupport(updatedSupport);
    setIsEditing(false);
  };

  return (
    <div className="main-section">
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Project</h3>
          <p>Review project from your learners.</p>
        </div>
      </div>

      {/* Table Section */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Topic</th>
              <th>Status</th>
              <th>View</th>
              <th>Remark</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {support.map((learner, index) => (
              <tr key={index} className={learner.status === 'No' ? 'active-row' : ''}>
                <td>{learner.name}</td>
                <td>{learner.topic}</td>
                <td>{learner.status}</td>
                <td>
                  <FaEye
                    className="edit-icon"
                    title="View"
                  />
                </td>
                <td>{learner.remark}</td>
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
              Assignment Marks:
              <input
                type="text"
                name="remark"
                value={currentEdit.remark}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BatchProject;
