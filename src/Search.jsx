import React from 'react'
import './search.css'
import { BsSearch } from 'react-icons/bs'
import color from './color.png'
// import App from './App'
import { FaFacebook ,FaTwitter } from 'react-icons/fa';
function Search() {
  return (
<div className='start'>
      <div className='pageStart'>
        <img className='backImg' alt='flag' src={color} />
        <div className='exchange'>
          <div className='SearchContent'>
            <h4> How Can We help you?</h4>
            <input type='search' placeholder='Search Country '></input>
            <p>Sign in to get in touch</p>
            <button className='	signs'>Sign In</button>
          </div>
        </div>
      </div> 
        <div className='foot'>
            <div className='logomake'>
                <label>AMALIT<div className='eDesigns'></div>CH</label>
                <p className='logotexts'>Currency Converter</p>
            </div>
            <div className='footSpace'>
                <div className='toolsTab'>
                    <h3>Tools</h3>
                    <p>Currency Convertor</p>
                    <p>Historical Currency Rates</p>
                    <p>Rate Alert</p>
                </div>
                <div className='exchangeTab'>
                    <h3>Exchange Rate Api</h3>
                    <p>Exchange Rate Api</p>
                    <p>Free Trial</p>
                    <p>Pricing</p>
                    <p>Developers</p>
                </div>
                <div className='aboutTab'>
                    <h3>About Us</h3>
                    <FaFacebook className='facebook'/>
                    <FaTwitter className='twitter'/>
                </div>
            </div>
        </div>
</div>
  )
}

export default Search