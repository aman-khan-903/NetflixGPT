
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
  useMovieTrailer(movieId);

  // it is a yt video key from which we will play video in background
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo); 



  return (
    <div className="z-30 ">
      <iframe className="w-screen aspect-video  "
        src={"https://www.youtube.com/embed/" +
          trailerVideo?.key+
          "?&autoplay=1&loop=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        autoPlay
        loop
        controls={false}
        muted   
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
