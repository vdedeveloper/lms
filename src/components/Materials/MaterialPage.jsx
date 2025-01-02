import React, { useState } from "react";
import "./Materials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MaterialPage = () => {
  // Navigation
  const navigate = useNavigate();
  // PDF
  const [pdfFile, setPdfFile] = useState(null);

  // PDF Function
  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // Form Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (pdfFile) {
      console.log("Uploaded PDF File:", pdfFile);
      alert(`PDF Uploaded: ${pdfFile.name}`);
    } else {
      alert("Please upload a PDF file before submitting.");
    }
  };

  return (
    // Main Section
    <div className="main-section">
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Add Materials</h3>
          <p>Upload your PDF materials and share your knowledge.</p>
        </div>
        <div className="user-add-btn">
          <button type="submit" onClick={handleFormSubmit}>
            <FontAwesomeIcon icon={faUpload} style={{ width: "20px", marginRight: "10px" }} />
            Publish Material
          </button>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleFormSubmit} className="create-material-content">
        {/* PDF */}
        <div className="pdf-material">
          <label>Import PDF :</label>
          <div className="add-pdf">
            <label htmlFor="pdfInput" className="add-cover-placeholder">
              {pdfFile ? (
                <div className="pdf-preview">
                  <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "24px", color: "red" }} />
                  <p>{pdfFile.name}</p>
                </div>
              ) : (
                <>
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "24px", color: "#888" }} />
                  </div>
                  <p>Add PDF File</p>
                </>
              )}
            </label>
            <input
              type="file"
              id="pdfInput"
              accept="application/pdf"
              style={{ display: "none" }}
              onChange={handlePdfChange}
            />
          </div>
        </div>
        {/* Title */}
        <div className="material-title">
          <label>Material Title :</label>
          <input type="text" placeholder="Enter Material Title" required />
        </div>
      </form>
    </div>
  );
};

export default MaterialPage;
