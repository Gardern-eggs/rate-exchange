import React from 'react'
import PropTypes  from 'prop-types'
import './index.css';


function RateCalculate(props) {
  return (
    <div exchangeCalculate>             
<input type='number' className='from' value={props.amount}/> 
    <select className='dropdown' value={props.currency}>
        {props.currencies.map((currency =>{
            <option value={currency}>{currency}</option>
        }))}
    </select>
 
    </div>
  )
}

RateCalculate.propTypes ={
    amount:PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies:PropTypes.array,
   
   }

export default RateCalculate