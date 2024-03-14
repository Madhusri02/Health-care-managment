import React, { useState }from "react";
import bg from '../assets/1.png'
// import { Link } from 'react-router-dom';
import {Login_page} from './Login'
// import
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';



export const PatHome=()=>{
    
    return(
    <div className="pat_home">
      <div> <img src= {bg} alt="not available"  className="pat-bg"/> </div>
      <div className="background">
       
           <div className="homeText">
              <h1>FIND A DOCTOR !</h1>
            </div>
        <div className="smallTest">
           <h3>Here is a better place to consult a doctor!!</h3>
        </div>
        <div>
         <input className="searchbar"   type="text" placeholder="Enter text" />
         <button style={{ backgroundColor: '#50B7B6' , color: 'black'  }} >Submit</button>
         <div className="book_appointment">
             <button style={{ backgroundColor: '#50B7B6' , color: 'black' , marginLeft: '30%' , }} >
              <a href="/login"> Login </a>
        </button>
        </div>
        </div>
    </div>
    <div className="card2">

      <div className="card2-items">
        <p>hello</p>
      </div>

    </div>
    </div>
)}
    