import React from "react";
import { BG_IMG } from "../utils/constant";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="-z-10 absolute ">
        <img src={BG_IMG} alt="" className="w-screen h-screen " />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
