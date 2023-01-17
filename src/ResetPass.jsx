import React from 'react'
import { BsGear } from 'react-icons/bs';

function ResetPass() {
  return (
    <div>
        
        <div className='resetTab'>
            <BsGear className='gear'/>
            <div className='info'>
                <div className='logoContainer'>
                    <label className='title'>AMALITE
                        <div className='container'>
                            <div className='lines'></div>
                        </div>CH
                    </label>
                    <div className='tag'>Currency Converter</div>
                </div>
                <p className='note'>Please check your email.</p>
            </div>
        </div>
    </div>
  )
}

export default ResetPass