import React from 'react';
import { BsGear } from 'react-icons/bs';
import './index.css';
import { Link } from 'react-router-dom';

function ResetPass() {
  return (
    <>
        <div className='resetTab'>
            <BsGear className='gear'/>
            <div className='infoPass'>
                <div className='logoContainerPass'>
                <Link to='/' className='link'>
                        <label>AMALIT<div className='Design'></div>CH</label>
                        <p className='logotexta'>Currency Converter</p>
                </Link>
                </div>
                <p className='not'>Please check your email.</p>
            </div>
        </div>
    </>
  )
}

export default ResetPass