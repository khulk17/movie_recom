import React from 'react';
import "./NavigationBar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import YellowButton from './YellowButton';
function NavigationBar() {
  return (
    <nav >
        
      <ul>
        <li>
            <div  className='icon' >
            <FontAwesomeIcon  icon={faClapperboard} size='3x' /> 
            <span className='icon-text' >  Movie Recomendation</span>
            </div>
                </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contat</Link>
        </li>
        <li>
          <Link to="/signin" >
          <YellowButton text={"Sign in"} />
          </Link>
            
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
