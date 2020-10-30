import React, {useState, useEffect} from 'react';
import './Banner.css';
import Banner from './Banner';
import GridCard from './GridCard';
import { Typography, Row, Spin } from 'antd';
import Footer from './Footer';
import { LoadingOutlined } from '@ant-design/icons';

const { Title } = Typography;
  

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />


function Upcoming() {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const IMAGE_URL = 'https://images.tmdb.org/t/p/original/';

    useEffect(() => {
        const API_URL = 'https://api.themoviedb.org/3';
        const API_KEY = '95fce0ee486a7e07be590380ef474a9f';
        const endPoint = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endPoint);
    },[])


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


    return(
        <div>
            <Banner />
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