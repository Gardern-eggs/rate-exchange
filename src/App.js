import './App.css';
import color from './color.png'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <div className="signIn">
      <div className='signIn_details'>
        <header>
          <h3 className='welcome'>Welcome back</h3>
          <p className='p'>Please enter your details</p>
        </header>
        <div className='loginDetails'>
          <label className='labels'>Email</label>
          <input placeholder='johndoe@jnkmail.com'></input>
          <label className='labels'>Password</label>
          <input type='password'placeholder='● ● ● ● ● ● ●'></input>
          <p>Forgot  <Link to='/Reset' className='link'><span>password</span></Link></p>
        </div>
        <Link to='/' className='link'>
           <button className='sign_in'>Sign in</button>
        </Link>
        <div className='signupOption'>
         <p>Don't have an account?  <Link to='/Signup' className='link'><span>Sign up</span></Link><br/><br/><p>or sign in with:</p><br></br><FcGoogle className='icon'/><FaFacebook className='icon faceBook'/></p>
        </div>
      </div>
      <div className='imageContainer'>
        <img alt='background' className='amalitech'src={color}/>
        <div className='logoSign'>
                <label className='logoname'>AMALIT<div className='signupLogo'></div>CH</label>
                <p className='logotext'>Currency Converter</p>
        </div>
      </div>
    </div>
  );
}

export default App;
