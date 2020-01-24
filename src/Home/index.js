import React from 'react';
import {Link} from "react-router-dom";
import './Home.scss';
import logo from '../assets/logo.png';
import Footer from '../Footer';

export default function Home(props) {
  return(
    <div className='container'>
      <div className='title'>
        <img className='Logo' src={logo} alt='logo'></img>
      </div>
      <div className='content'>En esta pagina visualizarás cómics aleatorios, podrás calificar y guardarlos en una lista, la cual, tendrás posibilidad de modificar.</div>
      <div className='btn'>
        <Link to='/rating-page' className='generalButton'>Comenzar</Link>
      </div>
    </div>
  )
}
