import React from 'react'
import './signup.css';
import { BsGear } from 'react-icons/bs';

function Reset() {
  return (
    <div className='resetTab'>
            <BsGear className='gear'/>
      <div className='info'>
              <div className='logoContainer'>
                   <label>AMALIT<div className='eDesign'></div>CH</label>
                   <p className='logotexts'>Currency Converter</p>
              </div>
              <p className='note'>We can help you reset your password using the
                  email address associated with your account.</p>
              <label>Email</label><br />
              <input type="text" placeholder='johndoe@jnkmail.com'></input><br />
              <button className='resetbtn'>Reset Password</button>
          </div>
    </div>
  
    
  )
}

export default Reset