import { useState } from 'react'
import { RouterProvider ,createBrowserRouter  } from 'react-router-dom' 
import { Nav_bar } from './screens/Navigation-bar'
import {Login_page} from './screens/Login'
import {PatHome} from './screens/Pat_home1'
import { Signup } from './screens/Sign_up'
import { Con } from './screens/Contact (1)'
import { Doc_signup } from './screens/Doc_sign_up'
import { Dashboard } from './screens/Patient-dashboard'
import './App.css'

function App() {

  // useEffect(() =>{
  //   fetch("https://expense-tracker-rww6.onrender.com/get_expense" , {mode : 'cors'})
  //   .then((res) => res.json())
  //   .then((data) => setdata(data))
  //   // console.log(data)
  // },[])

// const handleClick= (value) => {
//   set
// }

  const router = createBrowserRouter([
    {
    path: '/',
    element : <PatHome/>
  },
  {
    path: '/login' ,
    element: <Login_page />
  },
  {
    path: '/signup' ,
  element : <Signup />
},
{path :'/contact' ,
element : <Con />} ,
{
  path : '/dashboard',
  element : <Dashboard />
},
{
  path : '/doctor-sigup' ,
  element : <Doc_signup />
}
  ])
  return (
    <>
      <div>
      <Nav_bar/>
      
      <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
