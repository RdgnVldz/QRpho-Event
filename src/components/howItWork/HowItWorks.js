import React from "react";
import './howItWorks.css';
import {Link} from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

function HowItWorks() {
    return (
      <section className="section__margin how_container">
        <h2 className="section_title"><span>How It Works</span></h2>
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

        </div>

        <div className="seemore"><p><Link to="/howItWorks" >See More <IoIosArrowForward /></Link></p></div>
      </section>
    );
  }
  
  export default HowItWorks;