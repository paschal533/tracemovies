import React, { useState, useEffect } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Button } from 'antd';
import Rating from '@material-ui/lab/Rating';
import Row from './Row';
import Footer from './Footer';
import { DownloadOutlined, CaretRightOutlined } from '@ant-design/icons';
 

import './MoviePage.css';
 
const base_url = "https://images.tmdb.org/t/p/original/";

function MoviePage(props) {
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movie, setMovie] = useState([]);
    const API_KEY = '95fce0ee486a7e07be590380ef474a9f';
    const movieId = props.match.params.movieId;
    const movieName = props.match.params.movieName;
    const fetchUrl = `/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    const fetchRecommendation = `/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: false,
        }
    };

    function openMovie(movieName, firstAir) {
        if(firstAir){
            window.location.href = "/downloaad/serie/" + movieName ;
        }else {
            window.location.href = "/download/movie/" + movieName + '%20720p';
        }
    }
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data);
            return request;
        }
        async function fetchTrailer() {
            await movieTrailer(movieName || "")
              .then((url) => {
                  const urlParams = new URLSearchParams(new URL(url).search);
                  setTrailerUrl(urlParams.get("v"));
              })
              .catch((error) => console.log(movieName));
        }
        fetchData();
        fetchTrailer();
    },[fetchUrl, movieName])

    const MovieRating = Math.floor(movie?.vote_average)


    return(
        <div>
            {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : <div className="banner"
           style={{
               backgroundSize: "cover",
               backgroundPosition: "center",
               height: "390px",
               width: "100%",
               backgroundImage: `url(
                   "https://images.tmdb.org/t/p/original/${movie?.backdrop_path}"
               )`
           }}
        ></div>}
        <div className="container">
            <img 
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            className="movieImg"
            key={movie.id} />
            <div className="movieDescription" >
                <p>Title: <span>{movie.title}</span> </p>
                <p>Release date: <span>{movie.release_date}</span> </p>
                <p>Duration:  <span>{movie.runtime} mins </span> </p>
                <p>Rating: {movie.vote_average} <Rating name="read-only" size="large" max={10} value={MovieRating} readOnly /></p>
                <p>Overview: <span> {movie.overview}</span> </p>
                <div>
                    <Button type="primary" 
                    onClick={() => openMovie(movie?.title  || movie?.original_name, movie.first_air_date)} 
                    style={{ margin: "5px" }} 
                    icon={<DownloadOutlined />} size="large">
                    Download
                    </Button>
                    <Button type="primary" danger
                    onClick={() => openMovie(movie?.title  || movie?.original_name, movie.first_air_date)} 
                    style={{ margin: "2px" }} 
                    icon={<CaretRightOutlined />} size="large">
                    Stream Online
                    </Button>
                </div>
                </div>
            </div>
            <div className="recommended">
                    <Row isLargeRow dark title="Recommended for you" fetchUrl={fetchRecommendation} /> 
                </div>
                    <Footer dark />
        </div>
         
    )
}

export default MoviePage;