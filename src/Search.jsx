import React from 'react'
import './search.css'
import { useState,useEffect } from 'react';
// import { BsSearch } from 'react-icons/bs'
import color from './color.png'
import axios from 'axios';
// import App from './App'
import { FaFacebook ,FaTwitter } from 'react-icons/fa';

const url = 'https://restcountries.com/v2/all';


function Search() {

  const [countries,setCountries]=useState([])
  useEffect(()=>{ 
   
    axios.get(url).then((response)=>{
        const countries = response.data
        setCountries(countries)
        console.log(countries)
    })
    .catch((err)=>console.log(err))

  }, []) 
  const [search,setSearch]=useState('')

  return (
<div className='start'>
      <div className='pageStart'>
        <img className='backImg' alt='flag' src={color} />
        <div className='exchange'>
          <div className='SearchContent'>
            <h4> How Can We help you?</h4>
            <input type='search' placeholder='Search Country '  onChange={(e)=>{setSearch(e.target.value)}}></input>
            {/* <div className='display'>
            {/* filter component to search for countries */}
            {/* {countries
           // eslint-disable-next-line
            // .filter((val)=>{
            // if(search === ''){
            //    return val
               
            // }else if(val.name.toLowerCase().includes(search.toLocaleLowerCase())){
            //   return val

            // }          

                // }) .map((country)=>{
                  //data requested to complete project
                              // const { numericCode,flag,name,alpha3Code,currencies,code }= country
              
                  //to display pulled data request
                              return(
                              // <article key={numericCode}> 
                                  // <div className='countryBox '>
                                         
                                     {/* <div className='img-container'>
                                          <img src={flag} alt='Country flag'/>
                                      </div> */}
                                     
                                     {/* <div className='countryBoxDetail'>
                                     <h3 className='countryName'> {name}</h3>
                                     <h3 className='countryName'>  {currencies[0].name}</h3>
                                          
                                     </div> 
                                  </div>
                              </article>
                              )
                          
                          })} */}
                      {/* </div> */} 
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