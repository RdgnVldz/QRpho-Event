import React from 'react';
import './features.css';
import {PiSealCheckBold} from 'react-icons/pi';

function FeaturesSection() {
  return (
    <section className="feature_section section__margin">

    <div className='container'>
      <h2 className="page_title">Explore our  key <br /> <span>Features</span></h2>
    </div>

    <div className="feature_container container">

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>No more long registration queues at the event entrance</h6>
            <hr />
            <p>Participants just log in thru the mobile devices placed at the entrance which can take only a few seconds.  So no more long queues.</p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>Use of mobile app or web dashboard for event registration</h6>
            <hr />
            <p>No more writing in the registration area. Instead, a mobile app and web registration will be used. Just scan the QR code to register.</p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>Monitor the attendance status of the event anytime anywhere</h6>
            <hr />
            <p>Track event attendance status in real-time, from anywhere, at any time, using our user-friendly dashboard.</p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>Track attendance of an individual in the conference using Android tablets/phones placed at the entrance</h6>
            <hr />
            <p>Android phones will be used to capture the attendance of participants and it is easy to find where a participant is currently attending.</p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>Be assured of real people attending physically the event thru the use of QR Code, Selfie photo, face detection and geo-tagging</h6>
            <hr />
            <p>No more ghost attendance. Just real people attending your event. Just look at the selfie photo geo-tagged at the event.</p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>Can view the Upcoming and Past Events of the organization in the Dashboard</h6>
            <hr />
            <p>View Upcoming and Past Events in an organized way for easy scheduling and monitoring.</p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>Send mobile app notifications for reminders of upcoming events or meetings</h6>
            <hr />
            <p>Ensure better attendance as registered participants are sent reminders and notications about the upcoming events/meetings.</p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>View Food Restrictions of participants</h6>
            <hr />
            <p>Serve food and snacks that take into account the food allergies  of participants. May require separate food arrangements for those with food allergies . </p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>Participants can signify “Going, Not Going or Not Sure” for an event by tapping the buttons. Admin will know how many are interested in going or not by looking at the counter.</h6>
            <hr />
            <p>Immediately have an idea of the interest levels of an event for better marketing strategy and logistics preparation.</p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>View and share link of Meeting/Event page to see details about the event or meeting like Program, Agenda, Profile of Speakers and downloadables.</h6>
            <hr />
            <p>No need of printing program sheets or distributing agenda files. Just let them view the Event page to see all information and resources about the meeting/event.</p>
        </div>
      </div>

      <div className="feature-temp">
        <span>
          <PiSealCheckBold />
        </span>
        <div className='text-temp'>
            <h6>Issue QR Coded Attendance Certificate to ensure authenticity of certificate and assurance of actual attendance in the event</h6>
            <hr />
            <p>Only participants who actually attended the event will be issued Certificates of Attendance and it contained a QR Code that can be scanned to verify it is authentically issued by the system.</p>
        </div>
      </div>

    </div>

    </section>
  );
};

export default FeaturesSection;