import React from "react";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey= useSelector((store)=>store.appConfig.lang); 

  return (
    <div className="flex items-center justify-center ">
      <form className="bg-black p-6 m-6  w-1/3 grid grid-cols-12 gap-4 rounded-lg mt-52">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="py-2 px-5 rounded-md col-span-9"
        />
        <button className="py-2 px-6 bg-red-700 text-white rounded-md col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
