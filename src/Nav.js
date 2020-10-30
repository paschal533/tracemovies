import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showSearchIcon, setShowSearchIcon] = useState(false);

    function displaySearchBar() {
        if(showSearchBar){
            setShowSearchBar(false);
        }else {
            setShowSearchBar(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
                setShowSearchIcon(true);
            }else {
                handleShow(false);
                setShowSearchIcon(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[]);

    return (
        <div> 
            <div className={`nav ${show && "nav__black"}` }>
                <a href="/"><h2 className="nav__logo" >TraceMovies</h2></a>
                <div className="nav__avatar">
                    <FontAwesomeIcon onClick={displaySearchBar} icon={faSearch} className={`searchIcon ${showSearchIcon && "hideSearchIcon"}`} />
                    <a href="/movies" ><button className="nav__btn">MOVIES</button></a>
                </div>
            </div>
            <div className={` ${showSearchBar && "show__search"}`}>
                {showSearchBar? <SearchBar /> : null}
            </div>
        </div>
    )
}

export default Nav;