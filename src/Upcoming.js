import React, {useState, useEffect} from 'react';
import './Banner.css';
import GridCard from './GridCard';
import { Typography, Row, Spin } from 'antd';
import Footer from './Footer';
import { LoadingOutlined } from '@ant-design/icons';
import requests from './requests';
import axios from './axios';

const { Title } = Typography;
  

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />


function Upcoming() {
    const [movie, setMovie] = useState([]);
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const IMAGE_URL = 'https://images.tmdb.org/t/p/original/';

    useEffect(() => {
        const API_URL = 'https://api.themoviedb.org/3';
        const API_KEY = '95fce0ee486a7e07be590380ef474a9f';
        const endPoint = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
        async function fetchData() {
            const request = await axios.get(requests.fetchUpcoming);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
        fetchMovies(endPoint);
    },[])
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };


    async function fetchMovies(path) {
        setLoading(true);
        await fetch(path)
        .then(response => response.json())
        .then(response => {
            setResults([...results, ...response.results])
            setCurrentPage(response.page)
        })
        setLoading(false);
    }

    const handleClick = () => {
        const API_URL = 'https://api.themoviedb.org/3';
        const API_KEY = '95fce0ee486a7e07be590380ef474a9f';
        let endpoint = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
        fetchMovies(endpoint)
    }

    function openMovie(movieName, movieId, firstAir) {
        if(firstAir){
            window.location.href = "/serie/" + movieName + "/" + movieId;
        }else {
            window.location.href = "/movie/" + movieName + "/" + movieId;
        }
    }


    return(
        <div>
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
            <div style={{width: '85%', margin: '1rem auto'}} >
                <Title level={2}>Movies by latest</Title>
                <hr />
                <Row gutter={[16, 16]}>
                    {results?.map((movie,index) => {
                        return ( 
                        <React.Fragment key={index}>
                            <GridCard 
                            movie={movie}
                            image={movie.poster_path && `${IMAGE_URL}${movie.poster_path}`}
                            />
                        </React.Fragment>
                        )
                    })}
                </Row>    
            </div>
            {loading ? <div className="spinnerdiv"> 
                                <div className="spinner" >
                                    <Spin indicator={antIcon} /> 
                                </div>
                            </div> : null}
                            <br/>
            <div style={{ display: 'flex', justifyContent: 'center'}} >
                <button onClick={handleClick}>load more</button>
            </div>
            <Footer dark />
        </div>
    )
}

export default Upcoming;