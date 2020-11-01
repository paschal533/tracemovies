import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import axios from './axios';
import Row from './Row';
import requests from './requests';
import Footer from './Footer';
import GridCard from './GridCard';
import { Typography } from 'antd';
import './App.css';
import './Row.css';
import './Nav.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
  

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const { Title } = Typography;



function SearchResult(props) {
    const [movies, setMovies] = useState([]);
    const API_KEY = '95fce0ee486a7e07be590380ef474a9f';
    const query =  props.match.params.query; 
    const searchUrl = `/search/movie?query=${query}&api_key=${API_KEY}`;
    const IMAGE_URL = 'https://images.tmdb.org/t/p/original/';
    const [show, setShow] = useState(false);
    
     
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(searchUrl);
            setMovies(request.data.results);
            setShow(true);
            return request;
        }
        fetchData();   
    },[searchUrl]);
    

    return (
        <div className="App">
            <Banner />
            <div style={{width: '85%', margin: '1rem auto'}} >
                <Title  style={{ color: 'white'}} level={2}>Results for {query} </Title>
                <hr />
                    {show ? movies?.length !== 0 ?  <Row dark isLargeRow  fetchUrl={searchUrl} /> 
                    : <h3 style={{ color: 'white', marginTop: '20px', height: '15vh' }}>Sorry we couldn't find 
                    the movie {query} .
                     </h3>: <div className="spinnerdiv"> 
                            <div className="spinner" >
                                <Spin indicator={antIcon} /> 
                            </div>
                        </div>}  
            </div>
            <div className="recommended">
                <Row isLargeRow title="Recommended for you" fetchUrl={requests.fetchActionMovies} /> 
            </div>
            <Footer />
        </div>
    )
}

export default SearchResult;