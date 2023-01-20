import React,{useState} from 'react'
import amalitech from './amalitechemblem.png'
import {BsGlobe} from 'react-icons/bs'
import './Rate.css'
import color from './color.png'


function Rate() {
    const [date, setDate] = useState ("");

  return (
    <>
        <div className='head'>
                <div className='logoContainer'>
                    <img src={amalitech}/>
                </div>
                <div className='more'>
                    <ul>
                        <li>Tools</li>
                        <li>Exchange Rate Api</li>
                        <li>Resource</li>
                    </ul>
                </div>   
                <div className='language'>
                    <p>Sign in <button>Register</button> <BsGlobe className='globe'/> EN</p>
                 </div>
        </div>
        <div className='homePage'>
        <img  className='backImg' src={color}/>

            <div className='exchange' >
                <div className='exchangeDetails'>
                    <div className='exchangeTitle'>    
                        <h3>Ghana Cedi to Us Dollor </h3>
                        <p>convert GHS to USD</p>
                        <h5>1 GHS = 0.09 USD</h5>
                    </div>
                    <div className='exchangeInput'>
                        <input type='number' className='from'></input>
                        🔀
                        <input type='number' className='to'></input>
                    </div>    
                    <div className='calender'>
                        <p>Mid-market exchange rate at 12:30 UTC</p>
                        <input
                            className='date'
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className='ratelist'>
                <div className='rateFrom'>
                    hi
                </div>
                <div className='rateTo'>
                        okay
                </div>
            </div>
        </div>
    </>
  )
}

export default Rate