import './App.css';
import amalitech from './amalitechFlag.jpg'

function App() {
  return (
    <div className="signIn">
      <div className='signIn_details'>
        <header>
          <h3>Welcome back</h3>
          <p>Please enter your details</p>
        </header>
        <div className='loginDetails'>
          <label>Email</label><br></br>
          <input placeholder='johndoe@jnkmail.com'></input><br></br>
          <label>Password</label><br></br>
          <input placeholder='● ● ● ● ● ● ●'></input>
          <p>Forgot <span>password?</span></p>
        </div>
        <button className='sign_in'>Sign in</button>
        <div className='signupOption'>
        <p>Don't have an account? <span>Sign up</span><br></br><p>or sign in with:</p><br></br><i className='facebook_icon'>❤️</i><i className='google_icon'>🌘</i></p>
        </div>
      </div>
      <div className='imageContainer'>
        <img className='amalitech'src={amalitech}/>
      </div>
    </div>
  );
}

export default App;
