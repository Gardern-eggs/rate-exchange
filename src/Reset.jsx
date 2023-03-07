import React from 'react'
import './index.css';
import { BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Reset() {
  return (
    <div className='resetTab'>
            <BsGear className='gear'/>
      <div className='info'>
            <div className='logoContainerPass'>
            <Link to='/' className='link'>
                    <label>AMALIT<div className='Design'></div>CH</label>
                    <p className='logotexta'>Currency Converter</p>
            </Link>
            </div>
              <p className='note'>We can help you reset your password using the
                  email address associated with your account.</p>
              <p className='name'>Email</p>
              <input classname='emailHold' type="text" placeholder='johndoe@jnkmail.com'></input>
           <Link to='/ResetPass' className='link'>  <button className='resetbtn2'>Reset Password</button> </Link>
        </div>
    </div>
  
    
  )
}

export default Reset