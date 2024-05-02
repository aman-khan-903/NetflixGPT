import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm]= useState(true); 
  const [errorMessage, setErrorMessage]= useState(null); 


  const handleButtonClick =()=>{
    const message= checkValidData(email.current.value, password.current.value); 
    setErrorMessage(message);
  }

  // const name= useRef(null); 
  const email= useRef(null); 
  const password= useRef(null); 


  const toggleSignInForm= ()=>{
    setIsSignInForm(!isSignInForm); 
  }


  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg_Image' />
        </div>
        <form className='p-4 m-4 absolute top-[145px] left-[550px] bg-black w-3/12 flex flex-col opacity-80 rounded-xl text-white gap-5' onSubmit={(e)=>e.preventDefault()}>
            <h1 className='font-bold text-4xl'>{isSignInForm ? "Sign In": "Sign Up"}</h1>

            {
              !isSignInForm && <>
              <input 
            type='text' 
            placeholder='Full Name' 
            className='p-4 mx-auto w-11/12 bg-gray-700 rounded-lg font-extralight font-extrabold'
            />
            <input 
            type='number' 
            placeholder='Mobile Number' 
            className='p-4  mx-auto w-11/12 bg-gray-700 rounded-lg'
            />
              </>
            }

            <input ref={email} 
            type='text' 
            placeholder='Email Address' 
            className='p-4 mx-auto w-11/12 bg-gray-700 rounded-lg'
            />

            <input ref={password}
            type='password' 
            placeholder='Password' 
            className='p-4  mx-auto w-11/12 bg-gray-700 rounded-lg'
            />
            <span className='px-4 mt-[-20px] text-red-400 '>{errorMessage}</span>

            <button onClick={handleButtonClick} 
            className='p-4 my-4  bg-red-700 py-[10px] w-11/12 mx-auto rounded-lg'>
            {
              isSignInForm ? "Sign In" : "Sign Up"
            }
            </button>

            <span className='p-4' onClick={toggleSignInForm}>
              {
                isSignInForm ? 
                "New to Netflix ? Sign Up Now" : 
                "Already Registered ? Sign In Now"
              }
            </span>
        </form>
    </div>
  )
}

export default Login