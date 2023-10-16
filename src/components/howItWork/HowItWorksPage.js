import React from "react";
import './howItWorks.css';

function HowItWorks() {
    return (
      <section className="how_container section__margin">

        <div className="container">
          <h2 className="page_title">Decoding Our <span>Workflow</span>: <br /> A Step-By-Step Guide</h2>
        </div>

        <div className="how_it_works_container container">

          <div className="how_it_works-temp">
            <span>
              1
            </span>
            <p>Organization sets up the QRpho Events Dashboard</p>
          </div>
          
          <div className="how_it_works-temp">
            <span>
              2
            </span>
            <p>Organization adds the Event Details</p>
          </div>

          <div className="how_it_works-temp">
            <span>
              3
            </span>
            <p>Organization adds the Participants and register the participants to an event/events</p>
          </div>

          <div className="how_it_works-temp">
            <span>
              4
            </span>
            <p>Organization install QRpho App on Kiosk mode to be placed at the entrance of the venue. May use several devices to avoid crowding. </p>
          </div>
          
          <div className="how_it_works-temp">
            <span>
              5
            </span>
            <p>Gives the usernames, passwords, App Authorization (username and password) and download link of QRpho app to all participants.</p>
          </div>

          <div className="how_it_works-temp">
            <span>
              6
            </span>
            <p>Requests all participants to install QRpho app on Event Access mode in their cellphones using the login details sent</p>
          </div>

          <div className="how_it_works-temp">
            <span>
              7
            </span>
            <p>Posts the QR Code of the Meeting/Event page at the venue so everyone can view event/meeting details. </p>
          </div>
          
          <div className="how_it_works-temp">
            <span>
              8
            </span>
            <p>Posts QR Code of Qrpho App Download link with the App Authorization and Password </p>
          </div>

          <div className="how_it_works-temp">
            <span>
              9
            </span>
            <p>Participants login/logout at the mobile devices placed at the entrance using the QRpho app installed on their phones. May also use the printed QR Code ID or image.</p>
          </div>
          
          <div className="how_it_works-temp">
            <span>
              10
            </span>
            <p>Organization monitors the flow of attendance of participants. </p>
          </div>

          <div className="how_it_works-temp">
            <span>
              11
            </span>
            <p>Prints or sends QR Coded Certificates of Attendance to attendees </p>
          </div>

        </div>
      </section>
    );
  }
  
  export default HowItWorks;