import React from 'react'
import { useSelector } from 'react-redux'
import VidoeTitle from './VidoeTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies= useSelector((store)=>store.movies?.nowPlayingMovies); 
    const popularMovies= useSelector((store)=>store.movies?.popularMovies); 
    // console.log(popularMovies);

    if(!movies) return ; 

    const mainMovie= movies[2]; 

    const {overview, original_title,id}= mainMovie; 

  return (
    <div className=' bg-black ' >
        <VidoeTitle overview={overview} original_title={original_title}/>
        <VideoBackGround  movieId={id}/>
    </div>
  )
}

export default MainContainer