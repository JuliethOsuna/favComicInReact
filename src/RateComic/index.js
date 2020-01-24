import React from 'react';
import './RateComic.scss';
import mafaldaComic from '../assets/mafaldaComic.jpg';
import refresh from '../assets/refrescar.png';
import Rating from '../Rating'

export default function RateComic(props) {
  return(
    <div className='container'>
      <div className='comicTitle'>Nombre del cómic</div>
      <div className='cntImage'>
        <img className='comicImage' src={mafaldaComic} alt='' title='Nombre del cómic'></img>
      </div>
      <div className='rateStars'>
        <Rating />
      </div>
      <button className='refreshIcon'>
        <img src={refresh} alt='' title='Refrescar cómic'></img>
      </button>
    </div>
  )
}
