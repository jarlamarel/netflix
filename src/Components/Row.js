import movieTrailer from 'movie-trailer';
import React, { useState,useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from '../axios';


const base_url="https://image.tmdb.org/t/p/original/"
const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(() => {
        async function fetchdata(){
            const request = await axios.get(fetchUrl);
            
          setMovies(request.data.results);
            return request;
        }
        fetchdata();
    }, [fetchUrl]);
   // console.log(movies);
   const opts ={
       height:"300",
       width:"1000" ,
       playersVars:{
           autoplay:1,
       },
}
const handleClick=(movie)=>{
    if (trailerUrl){
        setTrailerUrl('');
    }else{
        movieTrailer(movie?.name||"").then((url)=>{
            const urlParams= new URLSearchParams (new URL(url).search);
           setTrailerUrl(urlParams.get('v')); 
        })
        .catch((error)=>console.log(error));
    }
}
    
    return (

        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
        {movies.map(movie=>(
            <img key={movie.id}
            onClick={()=>handleClick(movie)}
             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
             src={`${base_url}${isLargeRow? movie.poster_path :movie.backdrop_path}`} alt={movie.name}></img>
        ))}
            </div>
         { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
};

export default Row;