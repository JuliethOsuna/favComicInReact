import React from 'react';
import './Home.scss';
import logo from '../assets/logo.png'
import MainBackground from '../MainBackground/MainBackground';
import Footer from '../Footer/Footer';

export default function Home(props) {
  return(
    <div className='container'>
    <MainBackground />
      <div className='title'>
        <img className='Logo' src={logo} alt='logo'></img>
      </div>
      <div className='content'>En esta pagina visualizarás cómics aleatorios, podrás calificar y guardarlos en una lista, la cual, tendrás posibilidad de modificar.</div>
      <div className='btn'>
        <button className='generalButton'>Comenzar</button>
      </div>
      <Footer />
    </div>
  )
}
