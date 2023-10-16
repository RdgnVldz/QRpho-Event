import React from "react";
import './trustedBy.css';
import StarLink from '../../assest/images/starlink.png';
import ProdigyDev from '../../assest/images/prodigydev.png';
import QRpho from '../../assest/images/qrpho.png';

function TrustedBy() {
    return (
      <section className="container trusted_section section__margin">
        <h2 className="section_title"><span>Trusted By</span></h2>
        <div className="trusted_container">

          <div className="trusted_cards">
            <img src={QRpho} alt="QRpho Logo" />
          </div>

          <div className="trusted_cards">
            <img src={ProdigyDev} alt="QRpho Logo" />
          </div>

          <div className="trusted_cards">
            <img src={StarLink} alt="QRpho Logo" />
          </div>

          <div className="trusted_cards">
            <img src={QRpho} alt="QRpho Logo" />
          </div>

          <div className="trusted_cards">
            <img src={ProdigyDev} alt="QRpho Logo" />
          </div>

          <div className="trusted_cards">
            <img src={StarLink} alt="QRpho Logo" />
          </div>

        </div>
      </section>
    );
  }
  
export default TrustedBy;