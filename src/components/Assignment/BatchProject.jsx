import React, { useState } from 'react';
import { FaEdit, FaDownload } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

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

  // File Upload State
  const [uploadedFiles, setUploadedFiles] = useState({ file: null });

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

  // Handle File Upload
  const handleFileUpload = (name, event) => {
    const file = event.target.files[0];
    setUploadedFiles({ [name]: file });
  };

  // Save Changes
  const handleSave = () => {
    const updatedSupport = [...support];
    updatedSupport[currentEdit.index] = { ...currentEdit };
    delete updatedSupport[currentEdit.index].index;
    setSupport(updatedSupport);
    setIsEditing(false);
  };

  // Popup Function
  const openPopup = () => {
    alert('File uploaded successfully!');
  };

  return (
    <div className="main-section">
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Project</h3>
          <p>Set up your project and share your knowledge.</p>
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
              <tr key={learner.name} className={learner.status === 'No' ? 'active-row' : ''}>
                <td>{learner.name}</td>
                <td>{learner.topic}</td>
                <td>{learner.status}</td>
                <td>
                  <FaDownload className="edit-icon" title="View" />
                </td>
                <td>{learner.remark}</td>
                <td>
                  <FaEdit className="edit-icon" onClick={() => handleEdit(index)} title="Edit" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Section */}
      {isEditing && currentEdit && (
        <div className="modal">
          <div className="modal-content">
            <label>
              Assignment Marks:
              <input
                type="text"
                name="remark"
                value={currentEdit?.remark || ''}
                onChange={handleChange}
              />
            </label>
            <label>
              Uploaded File:
              <input type="file" onChange={(e) => handleFileUpload('file', e)} style={{ border: "1px solid #000", padding: "10px", borderRadius: "5px" }} />
              {uploadedFiles.file && <p>Uploaded File: {uploadedFiles.file.name}</p>}
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