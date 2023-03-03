import './App.css';
import color from './color.png'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <div className="signIn">
      <div className='signIn_details'>
        <header>
          <h3>Welcome back</h3>
          <p>Please enter your details</p>
        </header>
        <div className='loginDetails'>
          <label className='labels'>Email</label>
          <input placeholder='johndoe@jnkmail.com'></input>
          <label className='labels'>Password</label>
          <input type='password'placeholder='● ● ● ● ● ● ●'></input>
          <p>Forgot <span>password?</span></p>
        </div>
        <button className='sign_in'>Sign in</button>
        <div className='signupOption'>
        <p>Don't have an account? <span>Sign up</span><br/><br/><p>or sign in with:</p><br></br><FcGoogle className='icon'/><FaFacebook className='icon faceBook'/></p>
        </div>
      </div>
      <div className='imageContainer'>
        <img className='amalitech'src={color}/>
        <div className='logoSign'>
                <label className='logoname'>AMALIT<div className='signupLogo'></div>CH</label>
                <p className='logotext'>Currency Converter</p>
        </div>
      </div>
    </div>
  );
}

export default App;
