import React, { useState } from "react";


export const Signup=()=>{
    const [username , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [age , setAge] = useState(0)
      const [number , setNumber] = useState(0)
      const [email , setEmail] = useState('')
      const [data , setdata] = useState([])

 const handlesubmit =async (value) => {
        e.preventDefault();
        console.log(username)
        if (!username.trim() || !password.trim()){
            setError('Please enter both user ID and password');
            return;
        }
        else{
           await fetch('https://health-care-managment.onrender.com/signup', {
                Method: 'POST',
                Headers: {},
                Body: JSON.stringify({user_id: value.username , password : value.password , age: value.age , number : value.number , email : value.email }),
                Cache: 'default'
              }).then((res) =>{ res.JSON() ;console.log(res.json())})
              .then(() => setdata([...data , value]))
                // fetch('localhost:8000/get-user' , {mode : 'cors'})
                // .then((res)=> res.json)
                // .then((data)=> setUserName(data.username))
                // .then((data) => setAge(data.age))
                // .then((data)=> setPassword(data.password))
                // .then((data) => setNumber(data.number))
                // .then((data)=> setEmail(data.email))
        }
    }
    return(
        <div className="signup">
            <h2>SIGN_UP</h2>
            <form >
                <div>
                    <label>UserName:</label>
                    <input type="text" onChange={(e) => {setUserName(e.target.value) } } value={username}/>
                </div>
                <div>
                    <label>Set your Password:</label>
                    <input type="password" onChange={(val) => {setPassword(val.target.value)}} value={password}/>
                </div>
                <div>
                    <label>Age         :</label>
                    <input type="number"   onChange={(val) => {setAge(val.target.value)}} value={age} />
                </div>
                <div>
                    <label>Phone_no.    :</label>
                    <input type="number"  onChange={(val) => {setNumber(val.target.value)}} value={number}/>
                </div>
                <div>
                    <label>Email_id:</label>
                    <input type="text"  onChange={(val) => {setEmail(val.target.value)}} value={email}/>
                </div>
                
                <button style={{ backgroundColor: 'blue', color: 'white' }} type="submit"> <a href="/dashboard" onClick={handlesubmit}> Sign_up  </a></button>
            </form>
            <div>
                Already a member? 
                
            </div>
        </div>
    )
}