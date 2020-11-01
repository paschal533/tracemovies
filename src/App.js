import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import MoviePage from './MoviePage';
import Nav from './Nav';
import SearchResult from './SearchResult';
import Upcoming from './Upcoming';
import SeriePage from './SeriePage';
import DownloadPage from './DownloadPage';
import Download from './Download'; 
 
function App() {
  return (
     <Router>
       <Nav />
       <Route exact path="/" component={Home} /> 
       <Route path="/movie/:movieName/:movieId" component={MoviePage} />
       <Route path="/search/:query" component={SearchResult} />
       <Route path="/Movies" component={Upcoming} />
       <Route path="/serie/:movieName/:movieId" component={SeriePage} />
       <Route path="/files/:movieType/:movieName" component={DownloadPage} />
       <Route path="/download/:torrent/:movieID/:movieName" component={Download} />
     </Router>
  );
}

export default App;
