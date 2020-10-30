import React, { useState, useEffect } from 'react';
import requests from './requests';
import axios from './axios';
import './Banner.css';

function Banner () {
    const [movie, setMovie] = useState([]);

    function openMovie(movieName, movieId, firstAir) {
        if(firstAir){
            window.location.href = "/serie/" + movieName + "/" + movieId;
        }else {
            window.location.href = "/movie/" + movieName + "/" + movieId;
        }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    },[])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return(
        <header className="banner"
           style={{
               backgroundPosition: "center",
               backgroundSize: "cover",
               backgroundImage: `url(
                   "https://images.tmdb.org/t/p/original/${movie?.backdrop_path}"
               )`
           }}
        >
            <div className="banner__contents" >
                <h1 className="banner__title">{truncate(movie?.title || movie?.name || movie?.original_name, 30)}</h1>
                
                <div className="banner_buttons">
                    <button className="banner__button" onClick={() => openMovie(movie?.title  || movie?.original_name, movie.id, movie.first_air_date)}>Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;