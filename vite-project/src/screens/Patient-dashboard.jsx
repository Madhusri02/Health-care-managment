import React, { useState } from "react";
import bg from '../assets/2.png'
import tp from '../assets/3.png'

export const Dashboard = () =>{
const [age , setAge] = useState(0)
const [medicalhistory , setMedicalHistory] = useState('')
const [city , setCity] = useState('')
const [country , setCountry] = useState('')
const [number , setNumber] = useState(0)
const [email , setEmail] = useState('')
const [error , seterror] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()){
        setError('Please enter both user ID and password');
        return;
    }
    else{
        fetch('url', {
            Method: 'POST',
            Headers: {},
            Body: JSON.stringify({user_id:username , }),
            Cache: 'default'
          })
            fetch('localhost:8000/get-user' , {mode : 'cors'})
            .then((res)=> res.json)
            .then((data)=> setUserName(data.username))
            .then((data) => setAge(data.age))
            .then((data)=> setPassword(data.password))
            .then((data) => setNumber(data.number))
            .then((data)=> setEmail(data.email))
    }
}
    return (
        <div>
            <div><img src={bg} alt="" className= 'image' />
            <img src= {tp} alt="image" className="trans-img"/></div>
        <div>
            <form>
                <div>Dashboard</div>
                    <div>
                        <label>Age</label>
                        <input type="text" name="age"  onChange={(user) => {setAge(user.target.value)}  } value={age} />
                        {error.username && <div className="error"> username is required or enter correct details </div> }
                    </div>
                    <div>
                         <label>Medical History</label>
                        <input type="text" name="medicalhistory" onChange={((pass)=> {setMedicalHistory(pass.target.value)})} value={medicalhistory} />
                        {error.password && <div className="error"> password is required or enter correct details </div> }
                    </div>
                    <div>
                        <label>city</label>
                        <input type="text" name="city"  onChange={(user) => {setCity(user.target.value)}  } value={city} />
                        {error.username && <div className="error"> username is required or enter correct details </div> }
                    </div>
                    <div>
                         <label>country</label>
                        <input type="text" name="country" onChange={((pass)=> {setCountry(pass.target.value)})} value={country} />
                        {error.password && <div className="error"> password is required or enter correct details </div> }
                    </div>
                    <div>
                        <label>Number</label>
                        <input type="text" name="number"  onChange={(user) => {setNumber(user.target.value)}  } value={number} />
                        {error.username && <div className="error"> username is required or enter correct details </div> }
                    </div>
                    <div>
                         <label>Email</label>
                        <input type="text" name="email" onChange={((pass)=> {setEmail(pass.target.value)})} value={email} />
                        {error.password && <div className="error"> password is required or enter correct details </div> }
                    </div>
                        <button style={{ backgroundColor: 'blue', color: 'white' }} type="submit" onChange={handleSubmit}>  Book Appoinments  </button>
                    </form>
        </div>
        </div>
    )
}