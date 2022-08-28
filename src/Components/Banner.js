import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchdata(){
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length - 1 )]);
      return request;
    }
    fetchdata();
  },[]);
  function truncate(str,n){
    return str?.length> n ? str.substr(0,n-1)+ "..." : str; 
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
    
      </div>
    </header>
  );
};

export default Banner;
