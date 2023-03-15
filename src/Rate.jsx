import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {CgArrowsExchangeAlt} from 'react-icons/cg'
import './index.css';
import { Link} from 'react-router-dom';
import {BsGlobe} from 'react-icons/bs'
import './Rate.css'
import PropTypes  from 'prop-types'
import { FaFacebook ,FaTwitter } from 'react-icons/fa';
import color from './color.png'
import RateCalculate from './RateCalculate'
// import RateDeploy from './RateDeploy'
// import Signup from './Signup';
import { CgNotifications } from 'react-icons/cg';
import { BsBell} from 'react-icons/bs';
// const url=`https://v6.exchangerate-api.com/v6/b674eba9fac2f388e6a4c505/latest/USD`

function Rate(props) {
    // funtion to display date
    let currentDate = new Date();
    let clock=currentDate.toLocaleTimeString();
    const [date, setDate] = useState (new Date());
    // const [rate,setRate]=useState()

    // let rates=props.arrayData
    // api data fetch for currency
    // useEffect(()=>{ 
   
    //     axios.get(url).then((response)=>{
    //         const rate = response.data
    //         setRate(rate)
    //         console.log(rate)
    //     })
    //     .catch((err)=>console.log(err))
    
    //   }, []) 

    const [amount1, setAmount1]=useState(1);
    const [amount2, setAmount2]=useState(1);
    const [from, setFrom]=useState("USD");
    const [to, setTo]=useState("EUR");
    const [currency1, setCurrency1] = useState('usd');
    const [currency2, setCurrency2] = useState('usd');

    // const [rates,setRates]=useState([])


// Calling the convert function whenever
// a user switches the currency
      // useEffect(()=>{
      //   setOptions(Object.keys(rates));
      //   // convert();
      // },[rates])

//       // Function to convert the currency
// function convert() {
// 	var rate = rates[to];
// 	setAmount2(amount1 * rate);
// }

 // Function to switch between two currency
 function flip() {
	var temp = {setAmount1};
	setFrom({setAmount2});
	setTo(temp);
}

// function to calculate rate
      function handleCurrency1Change(currency1:string):void{
        setAmount2(amount1*4/*[currency2]*//2/*[currency1]*/);
        setCurrency1(currency1);
      }

      function handleCurrency2Change(currency2:string):void{
        setAmount1(  amount2 *4/*[currency1]*//2/*[currency2]*/);
        setCurrency2(currency2);
      }

      function handleAmount1Change(amount1: number):void{
        setAmount2(amount1*4/*[currency2]*//2/*[currency1]*/);
        setAmount1(amount1);
      }
      
      function handleAmount2Change(amount2: number):void{
        setAmount1(amount2*4/*[currency1]*//2/*[currency2]*/);
        setAmount2(amount2);
      }



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
                    <details data-popover="down">
                       <summary>Tools</summary>
                       <div>
                       <p>Currency Converter </p>
                        <p>Historical Currency Rates</p>
                        <p>Rate Alert </p>
                        </div>
                    </details>

                    <details data-popover="down">
                    <summary>Exhange Rate Api</summary>
                        <div>
                        <p><BsBell/> API </p>
                        </div>
                    </details>
                    <details data-popover="down">
                    <summary>Resources</summary>
                        <div>
                        <Link to='/Search' className='link'><p><BsGlobe/> Help Center </p></Link>
                            <p><div></div>Currency Newsletter</p>
                            <p><div></div>More</p>
                        </div>
                    </details>
                   
                    </ul>
                </div>   
                <div className='language'>
                    <Link to='App' className='link'>  <div id='sign'>Sign in</div></Link> 
                      <Link to='/SignUp' className='link'>
                        <button className='btnRegister'>Register</button>
                      </Link> 
                    <div className='sign'><BsGlobe className='globe'/> EN</div> 
                </div>
        </div>
    {/*end of header  */}
        <div className='homePage'>
            <img alt='background'  className='backImage' src={color}/>

            <div className='exchang' >
                <div className='exchangeDetails'>
                    <div className='exchangeTitle'>    
                        <h3>Ghana Cedi to Us Dollor </h3>
                        <p>Convert {currency1} to {currency2}</p>
                        <h5>1 {currency1} = 0.09 {currency2}</h5>
                    </div>
                    <div className='exchangeInput'>
                       {/* <RateDeploy /> */}
        <RateCalculate className='from'
          // currencies={Object.keys(rates)}
          // onChange={(e) => { setTo(e.value) }}
          // value={to} 
          // amount={amount1} 
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
            currencies={['usd','usd','ghs','togo','usd','usd','ghs','togo',"GBP","BHD","AUD","AMD","ARS","XCD","AOA","EUR","USD","DZD","AFG","AFN","EUR","ALL"]}
            amount={amount1}
            currency={currency1}
        />
        
          <CgArrowsExchangeAlt className='flipicon' onClick={() => { flip()}}/>

        <RateCalculate className='to'
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
          // currencies={Object.keys(rates)} 
          // onChange={(e) => { setFrom(e.value) }}
          // amount={amount2} 
          // value={from}
            currencies={['usd','ghs','togo','usd','usd','ghs','togo',"GBP","BHD","AUD","AMD","ARS","XCD","AOA","EUR","USD","DZD","AFG","AFN","EUR","ALL"]} 
            amount={amount2}
            currency={currency2}
        />
    
                    </div>  <br/>  
                    <div className='calender'>
                        <p>Mid-market exchange rate at {clock}</p>
                        <input
                            className='date'
                            type="date"
                            value={date.toISOString().substr(0, 10)}
                            onChange={(e) => setDate(new Date(e.target.value))}
                        />
                    </div>
                </div>
            </div>
            <div className='ratelist'>
                <div className='rateFrom'>
                    <div className='fromHead'>
                      <h3>Convert {currency1} to {currency2}</h3> 
                     <h5>💢 {currency1} 💢{currency2}</h5>   
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
                    <h3>Convert {currency2} to {currency1}</h3> 
                        <div className='fromBodyHead'>
                            <div className='toHolder'>💢 {currency2}</div>
                            <div className='fromHolder'>💢 {currency1}</div>
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
                            <h3>🏁 {currency1}</h3>
                        </div><br/>
                      <div className='fromHolder'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam adipisci corrupti velit amet in, nulla aspernatur ipsa a modi consequatur odio quae facere possimus illum? Enim sapiente nihil quibusdam reiciendis.</div>  
                    </div>
                </div>
           
                <div className='rateToinfo'>
                    <div className='toBodyinfo'>
                        <div className='title'>
                            <h3>🏁 {currency2}</h3>
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
Rate.propTypes ={
    amount:PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies:PropTypes.array,
    // onAmountChange:PropTypes.func,
    // onCurrencyChange:PropTypes.func,
   
   }


export default Rate