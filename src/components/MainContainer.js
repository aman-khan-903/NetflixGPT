import React from 'react'
import { useSelector } from 'react-redux'
import VidoeTitle from './VidoeTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies= useSelector((store)=>store.movies?.nowPlayingMovies); 

    if(!movies) return ; 

    const mainMovie= movies[1]; 

    const {overview, original_title,id}= mainMovie; 

  return (
    <div>
        <VidoeTitle overview={overview} original_title={original_title}/>
        <VideoBackGround  movieId={id}/>
    </div>
  )
}

export default MainContainer