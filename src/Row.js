import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
  

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />


const base_url = "https://images.tmdb.org/t/p/original/";

function openMovie(movieName, movieId, firstAir) {
    if(firstAir){
        window.location.href = "/serie/" + movieName + "/" + movieId;
    }else {
        window.location.href = "/movie/" + movieName + "/" + movieId;
    }
}

function Row({ title, fetchUrl, isLargeRow, dark }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            setLoading(false);
            return request;
        }
        fetchData();
    },[fetchUrl]);

     

    return (
        <div className={`row`}>
            <h2 className={dark ? "dark" : "white"}>{title}</h2>
            <div className="row__posters" >
                {loading? <div className="spinnerdiv"> 
                            <div className="spinner" >
                                <Spin indicator={antIcon} /> 
                            </div>
                        </div> :
                movies.map(movie => {
                    return(
                        <>
                            {movie.poster_path !== null ?  <img 
                            key={movie.id}
                            onClick={() => openMovie(movie?.title  || movie?.original_name, movie.id, movie.first_air_date)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={isLargeRow ? `${base_url}${movie.poster_path}`: `${base_url}${movie?.backdrop_path}` } 
                            alt={movie.name} /> : null}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Row;