import React, { useState } from 'react';
import "./Course.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCloudArrowUp, faImages, faTimes } from '@fortawesome/free-solid-svg-icons';

// Vertical divider for addmanual popup
const VerticalDivider = () => (
  <div
    style={{
      width: '1px',
      height: '100%',
      backgroundColor: '#ccc',
      margin: '0 10px',
    }}
  />
);

const CreateCoursePage2 = () => {
  // Course Available
  const [availability, setAvailability] = useState('');
  // Cover Image
  const [coverImage, setCoverImage] = useState(null);
  // Cover File
  const [coverFile, setCoverFile] = useState(null);
  // Popup Open
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Nested Popup
  const [isNestedPopupOpen, setIsNestedPopupOpen] = useState({ pdf: false, video: false, file: false, heading: false, text: false, link: false, quiz: false, livetest: false, liveclass: false, assignment: false });
  // Upload
  const [uploadType, setUploadType] = useState('');
  // Upload Files
  const [uploadedFiles, setUploadedFiles] = useState({ pdf: null, video: null, file: null, heading: null, text: null, link: null, quiz: null, livetest: null, liveclass: null, assignment: null });

  // for course available
  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  // Update the uploadType state
  const handleUploadTypeChange = (event) => {
    setUploadType(event.target.value);
  };

  // Form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Availability:', availability);
    console.log('Upload Type:', uploadType);
  };

  // For cover image
  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  // Add cover file
  const handleCoverFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverFile(URL.createObjectURL(file));
    }
  };

  // File upload
  const handleFileUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prevFiles) => ({ ...prevFiles, [type]: file }));
    }
  };

  // Open popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Close Popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setIsNestedPopupOpen({ pdf: false, video: false, file: false, heading: false, text: false, link: false, quiz: false, livetest: false, liveclass: false, assignment: false });
  };

  // Open Nested Popup
  const openNestedPopup = (type) => {
    setIsNestedPopupOpen((prevState) => ({ ...prevState, [type]: true }));
  };

  // Close Nested Popup
  const closeNestedPopup = (type) => {
    setIsNestedPopupOpen((prevState) => ({ ...prevState, [type]: false }));
  };

  return (
    // main
    <div className="main-section">
      {/* main heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Create Courses</h3>
          <p>Set up your courses and share your knowledge.</p>
        </div>
        <div className="course-submit-btn">
          <div className="user-add-btn">
            <button type="submit">
              <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
              Publish Course
            </button>
          </div>
          <div className="user-add-btn">
            <button type="submit">
              <FontAwesomeIcon icon={faCloudArrowUp} style={{ width: '25px', marginRight: '10px' }} />
              Save Course
            </button>
          </div>
        </div>
      </div>

      {/* content */}
      <form onSubmit={handleFormSubmit}>
        {/* addchapter manually section */}
        <div className="addcoursemanually">
          <div className="addchapter">
            <div className="addchapter-content">
              <h2>Add first chapter manually</h2>
              <p>
                Use <b>Headings</b> for adding the Chapter Heading and <b>Chapter Item</b> for adding Chapter Content
              </p>
            </div>
            <div className="addchapter-btn">
              <button type="button" className="addmanual-btn" onClick={openPopup}>
                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                Add Manually
              </button>
            </div>
          </div>
        </div>

        {/* Popup Modal */}
        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-content">
              {/* left */}
              <div className="popup-options">
                <div className="popup-content-left">
                  <h2>Upload new item</h2>
                  <div className="upload-content">
                    {/* PDF Popup */}
                    <div className="popup-pdf">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="pdf"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('pdf')}
                          required
                        />
                        <span><b>PDF:</b> Add a PDF file in the course.</span>
                      </label>
                      {isNestedPopupOpen.pdf && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>Upload PDF File</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('pdf')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <input type="file" accept="application/pdf" onChange={(e) => handleFileUpload('pdf', e)} />
                            {uploadedFiles.pdf && <p>Uploaded File: {uploadedFiles.pdf.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Video Popup */}
                    <div className="popup-video">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="video"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('video')}
                          required
                        />
                        <span><b>Video:</b> Upload video files.</span>
                      </label>
                      {isNestedPopupOpen.video && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>Upload Video File</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('video')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <input type="file" accept="video/*" onChange={(e) => handleFileUpload('video', e)} />
                            {uploadedFiles.video && <p>Uploaded File: {uploadedFiles.video.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* File Popup */}
                    <div className="popup-file">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="file"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('file')}
                          required
                        />
                        <span><b>File:</b> Add any file type for learners to download.</span>
                      </label>
                      {isNestedPopupOpen.file && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>Upload Any File</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('file')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <input type="file" onChange={(e) => handleFileUpload('file', e)} />
                            {uploadedFiles.file && <p>Uploaded File: {uploadedFiles.file.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column", height: "370px", gap: "15px" }}>
                <VerticalDivider />
                <div>or</div>
                <VerticalDivider />
              </div>
              {/* middle */}
              <div className="popup-options">
                <div className="popup-content-middle">
                  <h2>Create new item</h2>
                  <div className="upload-content">
                    {/* Heading Popup */}
                    <div className="popup-heading">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="heading"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('heading')}
                          required
                        />
                        <span>
                          <b>Heading:</b> Define your chapter or section headings
                        </span>
                      </label>
                      {isNestedPopupOpen.heading && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>New Heading</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('heading')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <textarea
                              placeholder="Add New Heading"
                              rows="5"
                              style={{ width: '100%', padding: '10px' }}
                              onChange={(e) => setUploadedFiles((prevFiles) => ({ ...prevFiles, heading: e.target.value }))}
                            />
                            {uploadedFiles.heading && <p>Uploaded File: {uploadedFiles.heading.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Text Popup */}
                    <div className="popup-text">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="text"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('text')}
                          required
                        />
                        <span>
                          <b>Text:</b> Add custom text or iFrame and HTML
                        </span>
                      </label>
                      {isNestedPopupOpen.text && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>Add Text Content</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('text')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <textarea
                              placeholder="Enter text content here..."
                              rows="5"
                              style={{ width: '100%', padding: '10px' }}
                              onChange={(e) => setUploadedFiles((prevFiles) => ({ ...prevFiles, text: e.target.value }))}
                            />
                            {uploadedFiles.text && <p>Uploaded File: {uploadedFiles.text.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Link Popup */}
                    <div className="popup-link">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="link"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('link')}
                          required
                        />
                        <span>
                          <b>Link:</b> Add Link which will be embedded in iFrame
                        </span>
                      </label>
                      {isNestedPopupOpen.link && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>Add URL*</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('link')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <textarea
                              placeholder="Enter url..."
                              rows="1"
                              style={{ width: '100%', padding: '10px' }}
                              onChange={(e) => setUploadedFiles((prevFiles) => ({ ...prevFiles, link: e.target.value }))}
                            />
                            {uploadedFiles.link && <p>Uploaded File: {uploadedFiles.link.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Quiz Popup */}
                    <div className="popup-quiz">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="quiz"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('quiz')}
                          required
                        />
                        <span>
                          <b>Quiz:</b> Learners can any time attempt & get results
                        </span>
                      </label>
                      {isNestedPopupOpen.quiz && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>Add Quiz</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('quiz')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <textarea
                              placeholder="Dummy quiz"
                              rows="1"
                              style={{ width: '100%', padding: '10px' }}
                              onChange={(e) => setUploadedFiles((prevFiles) => ({ ...prevFiles, quiz: e.target.value }))}
                            />
                            {uploadedFiles.quiz && <p>Uploaded File: {uploadedFiles.quiz.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Live Test Popup */}
                    <div className="popup-live-test">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="live-text"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('livetest')}
                          required
                        />
                        <span>
                          <b>Live test:</b> Learners can attempt it during specified time window. Leadership visible post result declaration.
                        </span>
                      </label>
                      {isNestedPopupOpen.livetest && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>Add Live Test</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('livetest')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <textarea
                              placeholder="Dummy live test"
                              rows="1"
                              style={{ width: '100%', padding: '10px' }}
                              onChange={(e) => setUploadedFiles((prevFiles) => ({ ...prevFiles, livetest: e.target.value }))}
                            />
                            {uploadedFiles.livetest && <p>Uploaded File: {uploadedFiles.livetest.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Live Class Popup */}
                    <div className="popup-live-class">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="live-class"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('liveclass')}
                          required
                        />
                        <span>
                          <b>Live class:</b> Conduct live classes and webinars
                        </span>
                      </label>
                      {isNestedPopupOpen.liveclass && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>Add Live Class</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('liveclass')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <textarea
                              placeholder="Dummy live class"
                              rows="1"
                              style={{ width: '100%', padding: '10px' }}
                              onChange={(e) => setUploadedFiles((prevFiles) => ({ ...prevFiles, liveclass: e.target.value }))}
                            />
                            {uploadedFiles.liveclass && <p>Uploaded File: {uploadedFiles.liveclass.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Assignment Popup */}
                    <div className="popup-assignment">
                      <label>
                        <input
                          type="radio"
                          name="uploadType"
                          value="assignment"
                          onChange={handleUploadTypeChange}
                          onClick={() => openNestedPopup('assignment')}
                          required
                        />
                        <span>
                          <b>Assignment:</b> Take assignments from your learners
                        </span>
                      </label>
                      {isNestedPopupOpen.assignment && (
                        <div className="nested-popup-overlay">
                          <div className="nested-popup-content">
                            <div className="nested-popup-heading">
                              <h2>New Assignment</h2>
                              <button className="close-icon" onClick={() => closeNestedPopup('assignment')}>
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <textarea
                              placeholder="title"
                              rows="1"
                              style={{ width: '100%', padding: '10px' }}
                              onChange={(e) => setUploadedFiles((prevFiles) => ({ ...prevFiles, assignment: e.target.value }))}
                            />
                            {uploadedFiles.assignment && <p>Uploaded File: {uploadedFiles.assignment.name}</p>}
                            <div className="pdf-upload-btn">
                              <button type="button" className="addmanual-btn" onClick={openPopup}>
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                upload
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column", height: "370px", gap: "15px" }}>
                <VerticalDivider />
                <div>or</div>
                <VerticalDivider />
              </div>
              {/* right */}
              <div className="popup-options">
                <div className="popup-content-right">
                  <h2>Import from your existing file</h2>
                  <div className="add-cover-files">
                    <label htmlFor="coverImageInput" className="add-cover-placeholder">
                      {coverFile ? (
                        <img src={coverFile} alt="Course Cover" className="cover-preview" />
                      ) : (
                        <>
                          <div className="icon-container">
                            <FontAwesomeIcon icon={faImages} style={{ fontSize: '24px', color: '#888' }} />
                          </div>
                          <p>Upload</p>
                        </>
                      )}
                    </label>
                    <input
                      type="file"
                      id="coverImageInput"
                      accept="*/*"
                      style={{ display: 'none' }}
                      onChange={handleCoverFile}
                    />
                  </div>
                </div>
              </div>
              <button className="close-icon" onClick={closePopup}>
                <FontAwesomeIcon icon={faTimes} style={{ fontSize: '18px', color: "var(--text-voilet)" }} />
              </button>
            </div>
          </div>
        )}

        {/* Add Cover Image Section */}
        <div className="add-cover-image">
          <label htmlFor="coverImageInput" className="add-cover-placeholder">
            {coverImage ? (
              <img src={coverImage} alt="Course Cover" className="cover-preview" />
            ) : (
              <>
                <div className="icon-container">
                  <FontAwesomeIcon icon={faImages} style={{ fontSize: '24px', color: '#888' }} />
                </div>
                <p>Add course cover</p>
              </>
            )}
          </label>
          <input
            type="file"
            id="coverImageInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleCoverImageChange}
          />
        </div>

        {/* course availablity Section */}
        <div className="course-availablity-check">
          <div className="course-availability">
            <h2>Availability Settings</h2>
            <div className="availability-options">
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="always"
                  onChange={handleAvailabilityChange}
                  required
                />
                Always Available
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="timebased"
                  onChange={handleAvailabilityChange}
                  required
                />
                Time Based
              </label>
            </div>
          </div>
          {availability === 'timebased' && (
            <div className="time-based-options">
              <div className="available-from">
                <label htmlFor="availableFrom">Available From</label>
                <input
                  type="datetime-local"
                  id="availableFrom"
                  name="availableFrom"
                  required
                />
              </div>
              <div className="available-to">
                <label htmlFor="availableTo">Available To</label>
                <input
                  type="datetime-local"
                  id="availableTo"
                  name="availableTo"
                  required
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateCoursePage2;
