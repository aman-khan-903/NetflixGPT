import React from 'react'
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VidoeTitle = ({original_title, overview}) => {
  return (
    <div className='pt-[16%] px-12 text-white w-screen aspect-video  absolute'>
        <h1 className='font-extrabold text-4xl tracking-tight'>{original_title}</h1>
        <h1 className='w-1/3 text-lg leading-normal mt-7'>{overview}</h1>
        <div className='flex gap-4 mt-5'>
            <button className='flex gap-3 items-center text-black py-2 px-6 bg-white  rounded-lg hover:bg-slate-300 opacity-90 transition'><FaPlay /> Play</button>
            <button className='flex gap-3 items-center text-white py-2 px-6 bg-black opacity-80 rounded-lg'><GoInfo/>More Info</button>
        </div>
    </div>
  )
}

export default VidoeTitle