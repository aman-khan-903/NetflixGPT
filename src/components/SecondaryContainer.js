import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies= useSelector((store)=>store.movies?.popularMovies); 
  const topRatedMovies= useSelector((store)=>store.movies?.topRatedMovies); 

  // console.log(movies);

  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-20">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Romantic" movies={movies} />
        <MovieList title="Horror" movies={popularMovies } />
      </div>
    </div>
  );
};

export default SecondaryContainer;
