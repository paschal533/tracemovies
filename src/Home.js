import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Footer from './Footer';
import './App.css';
 

function Home() {
  return (
    <div className="App">
       <Banner />
       <Row isLargeRow title="Trending Now" fetchUrl={requests.fetchTrending} />
       <Row 
       title="NETFLIX ORIGINAL"
       isLargeRow 
       fetchUrl={requests.fetchNetflixOriginals} />
       <Row isLargeRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
       <Row isLargeRow title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} /> 
       <Row isLargeRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
       <Footer />
    </div>
  );
}

export default Home;
