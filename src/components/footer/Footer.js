import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import './footer.css';
import { Link } from "react-router-dom";
import QRphoEvent from '../../assest/images/event-logo-2.png';
import {AiOutlineSend} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {FaViber} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';

function Footer() {
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_nmc598n', 'template_oqvsfy8', form.current, '6BZtN6Ptah6wo8NkG').then((result) =>{
        console.log(result.text);
        console.log("Message Sent");
      }, (error) => {
        console.log(error.text);
      });
    };

    return (
      <footer className="section__margin footer_section">
        <div className="container footer_container">
            <div className="qrpho-logo">
                <Link to="/"><img src={QRphoEvent} alt="QRpho Event Logo" /></Link>
            </div>

            <div className="footer_menus">
              <h5 className="footer_menu-title">Main Menus</h5>
              <ul>
                  <li>
                      <a href="/">Home</a>
                  </li>
                  <li>
                      <a href="/features">Features</a>
                  </li>
                  <li>
                      <a href="/pricing">Pricing</a>
                  </li>
                  <li>
                      <a href="/howItWorks">How It Works</a>
                  </li>
                  <li>
                      <a href="/login">Login</a>
                  </li>
                  <li>
                      <a href="/signUp">SIGN UP FOR FREE</a>
                  </li>
              </ul>
            </div>

            <div className="footer_contact">

              <h5 className="footer_menu-title">Contact Us</h5>

              <form ref={form} onSubmit={sendEmail}>
                <div className="contact_inputs">
                  <label>Name: </label>
                  <input type="text" required name="user_name" placeholder="Enter Name"/>
                </div>

                <div className="contact_inputs">
                  <label>Email: </label>
                  <input type="email" required name="user_email" placeholder="Enter Email"/>
                </div>

                <div className="contact_inputs-message">
                  <label>Message: </label>
                  <textarea name="message"></textarea>
                </div>

                <div className="contact_inputs-send">
                  <button type="submit" value="Send">Send <AiOutlineSend /></button>
                </div>
              </form>
            </div>

            <div className="footer_visit">
              <h5 className="footer_menu-title">Message Us</h5>
                <div className="socials">
                  <ul>
                    <li className="facebook"><a href="https://www.facebook.com/qrpho"><span><RiMessengerLine /></span> Messenger</a></li>
                    <li className="viber"><a href="https://www.facebook.com/qrpho"><span><FaViber /></span> Viber</a></li>
                    <li className="whatsapp"><a href="https://www.facebook.com/qrpho"><span><BsWhatsapp /></span> WhatsApp</a></li>
                  </ul>
                </div>
            </div>
        </div>

        <div className="devs">
          <p>Symphonics Dev &copy; All Rights Reserved 2023</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;