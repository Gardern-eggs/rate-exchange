import React from 'react'
import { BsGear } from 'react-icons/bs';


function ResetPass() {
  return (
    <div>
        
        <div className='resetTab'>
            <BsGear className='gear'/>
            <div className='info'>
                <div className='logoContainer'>
                        <label>AMALIT<div className='eDesign'></div>CH</label>
                        <p className='logotexts'>Currency Converter</p>
                </div>
                <p className='note'>Please check your email.</p>
            </div>
        </div>
    </div>
  )
}

export default ResetPass