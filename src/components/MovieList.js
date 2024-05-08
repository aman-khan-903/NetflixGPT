import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // if (!movies) {
  //   console.log("returning"); 
  //   return;   
  // }
  // console.log(movies);
  return (
    <div className="px-6 flex flex-col ">
      <h1 className="text-lg md:text-3xl py-4 text-white  font-extrabold">
        {title}
      </h1>
      <div className=" flex overflow-x-scroll">
        <div className="flex gap-3">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
