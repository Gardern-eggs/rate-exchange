import React from 'react'
import {CgArrowsExchangeAlt} from 'react-icons/cg'
import './index.css';
import { useState ,useEffect} from 'react'
import RateCalculate from './RateCalculate';
import axios from 'axios'
// import { object } from 'prop-types';

function RateDeploy() {
    const [amount1]=useState();
    // const [amount1, setAmount1]=useState();
    const [amount2]=useState();
    // const [amount2, setAmount2]=useState();
    const [from, setFrom]=useState("USD");
    const [to, setTo]=useState("EUR");
    const [options, setOptions] = useState([]);
    const [rates,setRates]=useState([])
     const url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
      useEffect(()=>{
        axios.get(url)
        .then(response =>{
          setRates(response.data[from])
        })
      }, [from])
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
	var temp = from;
	setFrom(to);
	setTo(temp);
}

    return (
    <div className='exchangeInput'>    
        <RateCalculate className='from'
          currencies={Object.keys(rates)}
          onChange={(e) => { setTo(e.value) }}
          value={to} 
          amount={amount1} 
        />
        
          <CgArrowsExchangeAlt className='flipicon' onClick={() => { flip()}}/>

        <RateCalculate className='to'
          currencies={Object.keys(rates)} 
          onChange={(e) => { setFrom(e.value) }}
          amount={amount2} 
          value={from}
        />
    
    </div>
  )
}

export default RateDeploy