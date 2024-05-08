import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { lang } from "../utils/languageConstant";
import { appLanguageChanger } from "../utils/appConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        // Sign-out successful.
        // navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handlerGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  // const languageHandler= (e)=>{
  //   console.log(e.target.value);
  //   // dispatch(appLanguageChanger(e.target.value)); 
  // }

  return (
    <div className="absolute px-10 py-6 bg-gradient-to-b from-black w-screen flex justify-between z-10">
      <img className="w-48" src={LOGO} alt="logo" />

      {user != null && (
        <div className="flex gap-8 items-center mr-5">
          {showGptSearch && (
            <select className="bg-gray-900 text-white px-2 py-1" onChange={(e)=>dispatch(appLanguageChanger(e.target.value))}>
              {SUPPORTED_LANGUAGES.map((lang, index) => (
                <option  key={index} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 rounded-lg px-4 py-1"
            onClick={handlerGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Page"}
          </button>
          <img src={user.photoURL} alt="userPhoto" className="h-10 w-10" />
          <button
            className="bg-red-600 rounded-lg px-4 py-1"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
