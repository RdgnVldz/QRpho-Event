import React from 'react';
import './price.css';
import {MdOutlineWbSunny} from 'react-icons/md';
import {FiCheckCircle} from 'react-icons/fi';

function PriceSection() {
  return (
    <section className='priceSection_container section__margin'>
      <div className='container'>
        <h2 className='page_title'>We've got a <span>Plan</span> <br />that's perfect for you</h2>
      </div>

      <div className='pricing_container container'>

        <div className='pricing-temp pro'>
            <div className='pricing_header'>
              <p className='price_code'><span><MdOutlineWbSunny /></span>Individual</p>
              <h4>Professional</h4>
              <div className='prices'>
                <p>₱300.00</p><span>₱400.00</span>
              </div>
            </div>

            <div className='pricing_info'>
              <div className='price_infos'>
                <span><FiCheckCircle /></span>
                <p>Up to 15 participants</p>
              </div>
              
              <div className='price_infos'>
                <span><FiCheckCircle /></span>
                <p>Up to 5 events</p>
              </div>
              
              <div className='price_infos'>
                <span><FiCheckCircle /></span>
                <p>Total control of the event, from registration to actual participants attended. With event dashboard and attendance monitoring</p>
              </div>
            </div>
            
            <div className='pricing_button'>
              <button>Try free for 30 days</button>
            </div>
        </div>

        <div className='pricing-temp standard'>
            <div className='pricing_header'>
              <p className='price_code'><span><MdOutlineWbSunny /></span>Premuim</p>
              <h4>Standard</h4>
              <div className='prices'>
                <p>₱500.00</p><span>₱600.00</span>
              </div>
            </div>

            <div className='pricing_info'>
              <div className='price_infos'>
                <span><FiCheckCircle /></span>
                <p>Up to 150 participants</p>
              </div>
              
              <div className='price_infos'>
                <span><FiCheckCircle /></span>
                <p>Up to 15 events</p>
              </div>
              
              <div className='price_infos'>
                <span><FiCheckCircle /></span>
                <p>Total control of the event, from registration to actual participants attended. With event dashboard and attendance monitoring</p>
              </div>
            </div>
            
            <div className='pricing_button'>
              <button>Try free for 30 days</button>
            </div>
        </div>

        <div className='pricing-temp ultimate'>
            <div className='pricing_header'>
              <p className='price_code'><span><MdOutlineWbSunny /></span>Platinum</p>
              <h4>Ultimate</h4>
              <div className='prices'>
                <p>₱1000.00</p><span>₱1400.00</span>
              </div>
            </div>

            <div className='pricing_info'>
              <div className='price_infos'>
                <span><FiCheckCircle /></span>
                <p>Unlimited participants</p>
              </div>
              
              <div className='price_infos'>
                <span><FiCheckCircle /></span>
                <p>Up to unlimited events</p>
              </div>
              
              <div className='price_infos'>
                <span><FiCheckCircle /></span>
                <p>Total control of the event, from registration to actual participants attended. With event dashboard and attendance monitoring</p>
              </div>
            </div>
            
            <div className='pricing_button'>
              <button>Try free for 30 days</button>
            </div>
        </div>

      </div>
    </section>
  )
}

export default PriceSection;