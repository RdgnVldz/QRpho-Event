import React from "react";
import './heroSection.css';
import HeroImage from '../../assest/images/hero_image.png'
import {AiOutlineArrowRight} from 'react-icons/ai';

function HeroSection() {
    return (
      <section className="container hero_section section__margin">
        <div className="hero_text">
          <h1>Hassle-free <span>Event Registration</span> and tracking of participants' attendance in events and meetings</h1>
          <ul>
            <li><p>No more long registration queues at the entrance</p></li>
            <li><p>Use of mobile app or website for event registration</p></li>
            <li><p>Monitor the attendance status of the event anytime anywhere</p></li>
            <li><p>Track attendance of an individual in the conference</p></li>
            <li><p>Be assured of real people attending physically the event thru the use of QR Code, Selfie photo, face detection and geo-tagging</p></li>
            <li><p>Issue QR Coded Attendance Certificate to ensure authenticity of certificate and assurance of actual attendance in the event</p></li>
            <li><p>Send mobile app notifications for reminders</p></li>
          </ul>
          <div className="event_action">
            <button className="create_event">CREATE AN EVENT</button>

            <div className="event_meeting">
              <p>Want to join an event/meeting?</p>
              <div className="join_meeting">
                <input type="text" placeholder="# Enter code here" /> <button><AiOutlineArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_image">
          <img src={HeroImage} alt="Hero Section" />
        </div>
      </section>
    );
  }
  
  export default HeroSection;