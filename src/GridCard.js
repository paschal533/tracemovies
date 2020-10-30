import React from 'react';
import { Col } from 'antd';


function openMovie(movieName, movieId, firstAir) {
    if(firstAir){
        window.location.href = "/serie/" + movieName + "/" + movieId;
    }else {
        window.location.href = "/movie/" + movieName + "/" + movieId;
    }
}

function GridCard({ image, movie }) {
    return(
        <Col lg={6} md={8} xs={12}>
            <div style={{ position: 'relative'}}>
                <img 
                onClick={() => openMovie(movie?.title  || movie?.original_name, movie.id, movie.first_air_date)}
                style={{ width:'100%', height:'320px'}} alt={image} src={image} />
            </div>
        </Col>
    )
}

export default GridCard;