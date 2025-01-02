import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import './Support.css'

const SupportLearner = () => {
  return (
    // Main Section
    <div className="main-section">
      {/* Support Learner */}
      <div className="support-learner">
        {/* Heading */}
        <div className="support-learner-heading">
          <h2>Looking for Help?</h2>
          <p>We are here. You can search our knowledge base for your doubts, Email or Call as per your convenience.</p>
        </div>
        {/* Containers */}
        <div className="support-learner-content">
          {/* Email */}
          <div className="email-support">
            <div className="email-heading">
              <FontAwesomeIcon icon={faEnvelope} style={{color: "var(--black)", padding: "10px", border: "1px solid var(--black)", borderRadius: "50%"}}/>
              <h2>Email Us</h2>
            </div>
            <div className="email-content">
              <p>
                Drop us an email to
                <span>
                  <a href="mailto:lms@vdei.in"> lms@vdei.in</a>
                </span>
              </p>
            </div>
          </div>
          {/* Call */}
          <div className="call-support">
            <div className="call-heading">
              <FontAwesomeIcon icon={faPhoneVolume} style={{color: "var(--black)", padding: "10px", border: "1px solid var(--black)", borderRadius: "50%"}}/>
              <h2>Call Us</h2>
            </div>
            <div className="call-content">
              <p>
                Call us anytime  <span><a href="callto:+91 8297219074">  +91 8297219074</a></span>
              </p>
            </div>
          </div>
          {/* Whatsapp */}
          <div className="whatsapp-support">
            <div className="whatsapp-heading">
              <FontAwesomeIcon icon={faWhatsapp} style={{color: "var(--black)", padding: "10px", border: "1px solid var(--black)", borderRadius: "50%"}}/>
              <h2>Whatsapp Us</h2>
            </div>
            <div className="whatsapp-content">
              <p>
                Chat with us on whatsapp  <a href="https://api.whatsapp.com/send/?phone=919281096379&text&type=phone_number&app_absent=0">  +91 8297219074</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportLearner
