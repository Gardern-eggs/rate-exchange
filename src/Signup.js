import './signup.css';
import React from 'react'
import amalitech from './amalitechFlag.jpg'

function Signup() {
 return (
    <div className="signUp">
        <div className='imageContainer'>
            <img src={amalitech}></img>
        </div>
        <div className='signUp_Details'>
            <div className='signUpDetails'>
                <label>Name</label>
                <input type="text" placeholder='John Doe'></input><br/>
                <label>Email</label><br/>
                <input type="text" placeholder='johndoe@jnkmail.com'></input><br/>
                <label>Password</label><br/>
                <input placeholder='● ● ● ● ● ● ●'></input>
                <p>Forgot <span>password?</span></p>
            </div>
               <button className='sign_up'>Sign up</button>
            <div className='signupOption'>
                <p>Already have an account? <span>Sign in</span><br/><p>or sign up with:</p><br/><i className='facebook_icon'>❤️</i><i className='google_icon'>🌘</i></p>
            </div>
        </div>
    </div> 
 );
}

export default Signup;