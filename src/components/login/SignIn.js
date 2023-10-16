import React from 'react';
import './signIn.css';
import QRphoLogo2 from '../../assest/images/event-logo.png';
import SVG1 from '../../assest/images/svg4.svg';

function SignIn() {
  return (
    <section className='signIn_section'>
        <div className='container'>

          <div className='signIn_container'>

            <div className='logo_side'>

              <h5>Hey There!</h5>

              
              <p>Welcome back! <br />You are just a few steps away to your event</p>

              <img src={SVG1} alt='Launch SVG' />

            </div>

            <div className='form_side'>
              
              <img src={QRphoLogo2} alt='QRpho Logo' />

              <h5>Sign In</h5>

              <form>
                <div className='input_group'>
                  <label>Username</label>
                  <input type='text' name='username' required />
                </div>

                <div className='input_group'>
                  <label>Password</label>
                  <input type='password' name='password' required />
                </div>

                <div className='input_button'>
                  <button>Sign In</button>
                </div>
              </form>

              <div className='visit_us'>
                  <p className='visit'>Don't have an account?</p>
                  <div className='visit_us-icons'>

                    <p className=""><a href='/signUp' >Sign Up</a></p>

                  </div>
              </div>
              
            </div>

          </div>

        </div>
    </section>
  )
}

export default SignIn;