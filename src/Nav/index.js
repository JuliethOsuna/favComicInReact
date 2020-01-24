import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/logo.png'
import './Nav.scss';

export default function Nav(props) {
  return(
    <div className='navBar'>
      <Link to='/'>
        <img src={logo} className='logoNav' alt=''></img>
      </Link>
    </div>
  )
}
