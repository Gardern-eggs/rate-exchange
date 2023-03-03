import './signup.css';
import React from 'react'
import color from './color.png'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function Signup() {
 return (
    <div className="signUp">
        <div className='imageContainer'>
            <img className='amalitech'src={color}/>
            <div className='logoSign'>
                <label className='logoname'>AMALIT<div className='signupLogo'></div>CH</label>
                <p className='logotext'>Currency Converter</p>
            </div>
        </div>
        <div className='signUp_Details'>
            <div className='signUpDetails'>
                <label className='labels'>Name</label>
                <input type="text" placeholder='John Doe'></input><br/>
                <label className='labels'>Email</label><br/>
                <input type="text" placeholder='johndoe@jnkmail.com'></input><br/>
                <label className='labels'>Password</label><br/>
                <input placeholder='● ● ● ● ● ● ●'></input>
                <p>Forgot <span>password?</span></p>
            </div>
               <button className='sign_up'>Sign up</button>
            <div className='signupOption'>
                <p>Already have an account? <span>Sign in</span><br/><p>or sign up with:</p><br/><FcGoogle className='icon'/><FaFacebook className='icon faceBook'/></p>
            </div>
        </div>
    </div> 
 );
}

export default Signup;