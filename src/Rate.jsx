import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import {BsGlobe} from 'react-icons/bs'
import './Rate.css'
import { FaFacebook ,FaTwitter } from 'react-icons/fa';
import color from './color.png'
import RateCalculate from './RateCalculate'
import RateDeploy from './RateDeploy'
import Signup from './Signup';


function Rate() {
    const [date, setDate] = useState ();
   

  return (
    <>
    {/* header component */}
        <div className='head'>
                <div className='RatelogoContainer'>
                <Link to='/' className='link'>
                        <label>AMALIT<div className='eDesign'></div>CH</label>
                        <p className='logotexts'>Currency Converter</p>
                </Link>
                </div>
                <div className='more'>
                    <ul>
                        <li>Tools</li>
                        <li>Exchange Rate Api</li>
                        <li>Resource</li>
                    </ul>
                </div>   
                <div className='language'>
                    <Link to='App' className='link'>  <div className='sign'>Sign in</div></Link> 
                      <Link to='/SignUp' className='link'>
                        <button className='btnRegister'>Register</button>
                      </Link> 
                    <div className='sign'><BsGlobe className='globe'/> EN</div> 
                </div>
        </div>
    {/*end of header  */}
        <div className='homePage'>
            <img  className='backImg' src={color}/>

            <div className='exchange' >
                <div className='exchangeDetails'>
                    <div className='exchangeTitle'>    
                        <h3>Ghana Cedi to Us Dollor </h3>
                        <p>Convert GHS to USD</p>
                        <h5>1 GHS = 0.09 USD</h5>
                    </div>
                    <div className='exchangeInput'>
                       <RateDeploy  />
                    </div>  <br/>  
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
                    <div className='fromHead'>
                      <h3>Convert GHS to USD</h3> 
                     <h5>💢 GHS 💢USD</h5>   
                    </div>
                    <div className='fromBody'>
                    <div className='fromHolder'>1 USD</div>  
                            <div className='toHolder'>1 GHS</div>  
                        <div className='fromHolder'>5 USD</div>  
                            <div className='toHolder'>5 GHS</div> 
                        <div className='fromHolder'>1O USD</div>   
                            <div className='toHolder'>10 GHS</div>  
                        <div className='fromHolder'>25 USD</div>  
                            <div className='toHolder'>25 GHS</div>  
                        <div className='fromHolder'>50 USD</div> 
                            <div className='toHolder'>50 GHS</div>  
                        <div className='fromHolder'>100 USD</div>  
                            <div className='toHolder'>100 GHS</div> 
                        <div className='fromHolder'>1000 USD</div>
                            <div className='toHolder'>1000 GHS</div>   
  
                    </div>
                </div>
                <div className='rateTo'>
                    <div className='toHead'>
                    <h3>Convert GHS to USD</h3> 
                        <div className='fromBodyHead'>
                            <div className='toHolder'>💢 USD</div>
                            <div className='fromHolder'>💢 GHS</div>
                        </div>
                    </div>
                    <div className='toBody'>
                        <div className='fromHolder'>1 USD</div>  
                            <div className='toHolder'>1 GHS</div>  
                        <div className='fromHolder'>5 USD</div>  
                            <div className='toHolder'>5 GHS</div> 
                        <div className='fromHolder'>1O USD</div>   
                            <div className='toHolder'>10 GHS</div>  
                        <div className='fromHolder'>25 USD</div>  
                            <div className='toHolder'>25 GHS</div>  
                        <div className='fromHolder'>50 USD</div> 
                            <div className='toHolder'>50 GHS</div>  
                        <div className='fromHolder'>100 USD</div>  
                            <div className='toHolder'>100 GHS</div> 
                        <div className='fromHolder'>1000 USD</div>
                            <div className='toHolder'>1000 GHS</div>  
                    </div>
                </div>
            </div>
            <div className='label'>
               <h2>Currency Information</h2>
            </div>
            <div className='ratelist'>
                <div className='rateFrominfo'>
                    <div className='fromBodyinfo'>
                        <div className='title'>
                            <h3>🏁 GHS</h3>
                        </div><br/>
                      <div className='fromHolder'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam adipisci corrupti velit amet in, nulla aspernatur ipsa a modi consequatur odio quae facere possimus illum? Enim sapiente nihil quibusdam reiciendis.</div>  
                    </div>
                </div>
           
                <div className='rateToinfo'>
                    <div className='toBodyinfo'>
                        <div className='title'>
                            <h3>🏁 USD</h3>
                        </div><br/>
                        <div className='toHolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias eos beatae aliquid consectetur, et quas earum repudiandae laudantium error dolorum, quos, quo tempore suscipit fugiat a. Porro, repudiandae laborum.</div>  
                    </div>
                </div>
               
             </div> 
            <div className='foot'>
                {/* <div className='footHolder'> */}
                    <div className='logomake'>
                    <Link to='/' className='link'>

                        <label>AMALIT<div className='eDesign'></div>CH</label>
                        <p className='logotexts'>Currency Converter</p>
                    </Link>
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
                {/* </div> */}
            </div>  
        </div>

    </>
  )
}



export default Rate