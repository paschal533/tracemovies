import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import MoviePage from './MoviePage';
import Nav from './Nav';
import SearchResult from './SearchResult';
import Upcoming from './Upcoming';
import SeriePage from './SeriePage';
import DownloadPage from './DownloadPage';
 
 
function App() {
  return (
     <Router>
       <Nav />
       <Route exact path="/" component={Home} /> 
       <Route exact path="/movie/:movieName/:movieId" component={MoviePage} />
       <Route exact path="/search/:query" component={SearchResult} />
       <Route exact path="/Movies" component={Upcoming} />
       <Route exact path="/serie/:movieName/:movieId" component={SeriePage} />
       <Route exact path="/download/:movieType/:movieName" component={DownloadPage} />
     </Router>
  );
}

export default App;
