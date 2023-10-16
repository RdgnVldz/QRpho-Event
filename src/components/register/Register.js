import React from 'react';
import './register.css';
import QRphoLogo2 from '../../assest/images/event-logo.png';
import SVG1 from '../../assest/images/svg4.svg';

const Register = () => {
  return (
    <section className='register_section'>
        <div className='container'>
            <div className='register_container'>
                <div className='logo_side'>

                    <h5>Almost There!</h5>


                    <p>Create an Account! <br />You are just a few steps away to your event</p>

                    <img src={SVG1} alt='Launch SVG' />

                </div>

                <div className='form_side'>

                    <img src={QRphoLogo2} alt='QRpho Logo' />

                    <h5>Sign Up</h5>

                    <form>
                        <div className='input_row'>
                            <div className='input_group input_group-r'>
                                <label>First Name</label>
                                <input type='text' name='fname' required  />
                            </div>

                            <div className='input_group input_group-r'>
                                <label>Last Name</label>
                                <input type='text' name='lname' required />
                            </div>
                        </div>

                        <div className='input_group input_group-r '>
                            <label>Email</label>
                            <input type='email' name='email' required />
                        </div>

                        <div className='input_group input_group-r'>
                            <label>Phone Number</label>
                            <input type='tel' name='phone' required />
                        </div>
                    

                        <div className='input_button input_button-r'>
                            <button>Sign Up</button>
                        </div>
                    </form>

                    <div className='visit_us'>
                        <p className='visit'>Already have an account?</p>
                        <div className='visit_us-icons visit_us-icons-r'>

                        <p className=""><a href='/login' >Sign In</a></p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Register;