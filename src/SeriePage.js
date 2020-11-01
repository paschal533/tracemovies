import React, { useState, useEffect } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import Rating from '@material-ui/lab/Rating';
import movieTrailer from 'movie-trailer';
import { Button } from 'antd';
import Row from './Row';
import Footer from './Footer';
import { DownloadOutlined } from '@ant-design/icons';

 

import './MoviePage.css';
 
const base_url = "https://images.tmdb.org/t/p/original/";

function SeriePage(props) {
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movie, setMovie] = useState([]);
    const API_KEY = '95fce0ee486a7e07be590380ef474a9f';
    const movieId = props.match.params.movieId;
    const movieName = props.match.params.movieName;
    const fetchSerie = `/tv/${movieId}?api_key=${API_KEY}&language=en-US`
    const fetchRecommendation = `/tv/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: false,
        }
    };

    function openMovie(movieName, firstAir, movieSeason) {
        if(firstAir){
            window.location.href = "/files/TV/" + movieName + `%20S0${movieSeason}`;
        }else {
            window.location.href = "/download/movie/" + movieName;
        }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchSerie);
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
    },[fetchSerie, movieName])

    const MovieRating = Math.floor(movie.vote_average);


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
                    <p>Title: <span>{movie.name}</span> </p>
                    <p>Release date: <span>{movie.first_air_date}</span> </p>
                    <p>Number of seasons: <span>{movie.number_of_seasons} </span> </p>
                    <p>Rating: {movie.vote_average}  <Rating name="read-only" max={10} size="large" value={MovieRating} readOnly /></p>
                    <p>Overview: <span> {movie.overview}</span> </p>
                    <div>
                        {movie.seasons?.map((data) => {
                            return (
                                <Button type="primary" 
                                    onClick={() => openMovie(movie?.name, movie?.first_air_date, data.name.charAt(7))} 
                                    style={{ margin: "5px" }} 
                                    icon={<DownloadOutlined />} size="large">
                                    Download {data.name}
                                </Button>
                            )
                        })}
                    </div>
                    <br/>
                    </div>
            </div>
            <br/>
            <div className="recommended">
                        <Row isLargeRow dark title="Recommended for you" fetchUrl={fetchRecommendation} /> 
                    </div>
                        <Footer dark />
        </div>
    )
}

export default SeriePage;