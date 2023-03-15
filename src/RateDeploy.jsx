import React from 'react'
import {CgArrowsExchangeAlt} from 'react-icons/cg'
import './index.css';
import { useState ,useEffect} from 'react'
import RateCalculate from './RateCalculate';
// import { object } from 'prop-types';


function RateDeploy() {
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
      function handleCurrency1Change(currency1){
        setAmount2(amount1*4/*[currency2]*//2/*[currency1]*/);
        setCurrency1(currency1);
      }

      function handleCurrency2Change(currency2){
        setAmount1(  amount2 *4/*[currency1]*//2/*[currency2]*/);
        setCurrency2(currency2);
      }

      function handleAmount1Change(amount1){
        setAmount2(amount1*4/*[currency2]*//2/*[currency1]*/);
        setAmount1(amount1);
      }
      
      function handleAmount2Change(amount2){
        setAmount1(amount2*4/*[currency1]*//2/*[currency2]*/);
        setAmount2(amount2);
      }
        
    return (
    <div className='exchangeInput'>    
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
    
    </div>
  )
}

export default RateDeploy