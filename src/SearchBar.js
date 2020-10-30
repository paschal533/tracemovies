import React, { useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import './searchBar.css';
import { Input } from 'antd';

const { Search } = Input;

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInput = e => {
        let text = e.target.value;
        setSearchQuery(text);
      }
    const handleSubmit = () => {
        window.location.href = "/search/" + searchQuery ;
    }
    return(
        <div className="wrap">
            <div className="search">
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={() => handleSubmit()}
                    onChange={handleInput}
                />
                {/*<input type="text" className="searchTerm"
                placeholder="Search for any movie here"
                onSearch={() => handleSubmit()} 
                onChange={handleInput}/>
                <button type="submit" onClick={() => handleSubmit()} className="searchButton">
                    <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
                 </button>*/}
            </div>
        </div>
    )
}

export default withRouter(SearchBar);