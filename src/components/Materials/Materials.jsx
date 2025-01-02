import React from "react";
import { useNavigate } from "react-router-dom";
import "./Materials.css";

const Materials = () => {
  // Navigation
  const navigate = useNavigate();

  // Material Page Navigation
  const handleAddBatchClick = () => {
    navigate("/material-page");
  };

  // Handle Menu
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  // Open PDF 1
  const openPdf1 = () => {
    window.open('/Lumion Reference Notes.pdf', '_blank');
  };

  // Open PDF 2 
  const openPdf2 = () => {
    window.open('/REVIT ARCHITECTURE MATERIAL FOR REFERENCE .pdf', '_blank');
  };

  // Open PDF 3
  const openPdf3 = () => {
    window.open('/REVIT STRUCTURE FOR REFERENCE pdf.pdf', '_blank');
  };

  return (
    // Main Section
    <div className="main-section" onContextMenu={handleContextMenu}>
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Materials</h3>
          <p>Set up your courses videos, materials and share your knowledge.</p>
        </div>
        <div className="user-add-btn addcourse">
          <button onClick={handleAddBatchClick}>Add Materials +</button>
        </div>
      </div>

      {/* Material Content */}
      <div className="material">
        <div className="material-card">
          {/* Clickable Image to open PDF in a new tab */}
          <div onClick={openPdf1} style={{ cursor: "pointer" }}>
            <img
              src="/thumbnail.png"
              alt="Lumion Reference Notes"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0 0px 6px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          {/* PDF Title */}
          <div className="pdf-heading">
            <h2>Lumion Reference Notes</h2>
          </div>
        </div>
        <div className="material-card">
          {/* Clickable Image to open PDF in a new tab */}
          <div onClick={openPdf2} style={{ cursor: "pointer" }}>
            <img
              src="/thumbnail.png"
              alt="REVIT ARCHITECTURE MATERIAL FOR REFERENCE"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0 0px 6px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          {/* PDF Title */}
          <div className="pdf-heading">
            <h2>Revit Architecture Material</h2>
          </div>
        </div>
        {/* Cards */}
        <div className="material-card">
          {/* Clickable Image to open PDF in a new tab */}
          <div onClick={openPdf3} style={{ cursor: "pointer" }}>
            <img
              src="/thumbnail.png"
              alt="REVIT STRUCTURE FOR REFERENCE pdf"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0 0px 6px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          {/* PDF Title */}
          <div className="pdf-heading">
            <h2>Revit Structure Material</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
