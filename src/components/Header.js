import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { LOGO } from '../utils/constant';

const Header = () => {
  const dispatch= useDispatch(); 
  const navigate= useNavigate(); 
  const user= useSelector(store=> store.user); 

  const handleSignOut= ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser()); 
      // Sign-out successful.
      // navigate('/');   
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    }); 
  }

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
          navigate('/browse');
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
          navigate('/');
      }
    });

    return ()=>unsubscribe(); 
  }, []);

  return (
    <div className='absolute px-10 py-6 bg-gradient-to-b from-black z-10 w-screen flex justify-between overflow-hidden'>
        <img className='w-48' src={LOGO} alt='logo' />

        { user!=null &&
        <div className='flex gap-8 items-center mr-5'>
        <img src={user.photoURL}  alt='userPhoto' className='h-10 w-10'/>
        <button className='bg-red-600 rounded-lg px-4 py-1' onClick={handleSignOut}>Sign Out</button>
        </div>
        }
    </div>
    
  )
}

export default Header