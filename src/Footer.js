import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

function Footer({ dark }) {
    return(
        <div className={`footer`} >
            <p className={dark ? "dark" : "white"}>Made with <FontAwesomeIcon icon={faHeart} className="loveIcon" /> by Paschal</p>
        </div>
    )
}

export default Footer;