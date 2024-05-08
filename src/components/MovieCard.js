import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath, movie, key}) => {
    // console.log(key);
    // console.log(movie.id);
    // console.log(key);
  return (
    <div className='w-36'>
        <img className='w-36 rounded-md cursor-pointer' alt='' src={IMG_CDN+ posterPath}/>
        <p className='text-white'>{key}</p>
    </div>
  )
}

export default MovieCard