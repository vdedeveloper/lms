import React from 'react';
import './SessionVideo.css';

const SessionVideo = () => {
  // Handle Menu
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    // Main Section
    <div className="main-section" onContextMenu={handleContextMenu}>
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Session Video</h3>
          <p>Set up your courses videos and share your knowledge.</p>
        </div>
      </div>

      {/* Session Video Section */}
      <div className="session-video">
        <div className="session-video-card">
          <div className="session-video-counter-video">
            <video
              src="/demo-video.mp4"
              muted
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              controls
            ></video>
          </div>
          <div className="session-video-title">
            <h2>BIM BASIC COURSE <span>(ACS)</span></h2>
          </div>
          <div className="session-video-trainer-name">
            <h3>(Subbarao Attada)</h3>
          </div>
          <div className="session-video-topic">
            <div className="video-topic2">
              <img src="/course-details.png" />
              <h2>Topic :</h2>
            </div>
            <div className="session-video-topic-content">
              <h2>AutoCAD Chapter 01</h2>
            </div>
          </div>
          <div className="session-video-date">
            <div className="session-video-date2">
              <img src="/batch-calender-icon.png" />
              <h2>Date :</h2>
            </div>
            <div className="session-video-date-content">
              <h2>23/12/2024</h2>
            </div>
          </div>
        </div>
        <div className="session-video-card">
          <div className="session-video-counter-video">
            <video
              src="/demo-video.mp4"
              muted
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              controls
            ></video>
          </div>
          <div className="session-video-title">
            <h2>BIM BASIC COURSE <span>(ACS)</span></h2>
          </div>
          <div className="session-video-trainer-name">
            <h3>(Subbarao Attada)</h3>
          </div>
          <div className="session-video-topic">
            <div className="video-topic2">
              <img src="/course-details.png" />
              <h2>Topic :</h2>
            </div>
            <div className="session-video-topic-content">
              <h2>AutoCAD Chapter 01</h2>
            </div>
          </div>
          <div className="session-video-date">
            <div className="session-video-date2">
              <img src="/batch-calender-icon.png" />
              <h2>Date :</h2>
            </div>
            <div className="session-video-date-content">
              <h2>23/12/2024</h2>
            </div>
          </div>
        </div>
        <div className="session-video-card">
          <div className="session-video-counter-video">
            <video
              src="/demo-video.mp4"
              muted
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              controls
            ></video>
          </div>
          <div className="session-video-title">
            <h2>BIM BASIC COURSE <span>(ACS)</span></h2>
          </div>
          <div className="session-video-trainer-name">
            <h3>(Subbarao Attada)</h3>
          </div>
          <div className="session-video-topic">
            <div className="video-topic2">
              <img src="/course-details.png" />
              <h2>Topic :</h2>
            </div>
            <div className="session-video-topic-content">
              <h2>AutoCAD Chapter 01</h2>
            </div>
          </div>
          <div className="session-video-date">
            <div className="session-video-date2">
              <img src="/batch-calender-icon.png" />
              <h2>Date :</h2>
            </div>
            <div className="session-video-date-content">
              <h2>23/12/2024</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionVideo;
