import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Header = () => {
  const dispatch= useDispatch(); 
  const navigate= useNavigate(); 
  const user= useSelector(store=> store.user); 

  const handleSignOut= ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser()); 
      // Sign-out successful.
      navigate('/'); 
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    }); 
  }

  return (
    <div className='absolute p-4 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className='w-48' src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460' alt='logo' />

        { user!=null &&
        <div className='flex gap-8 items-center mr-5'>
        <img src={user.photoURL}  alt='userPhoto' className='h-10 w-10'/>
        <button className='bg-red-600 rounded-lg px-2 py-1' onClick={handleSignOut}>Sign Out</button>
        </div>
        }
    </div>
    
  )
}

export default Header