import React from 'react';
import './Ratings.scss';
import ComicCard from '../ComicCard';

export default function Ratings(props) {
  return(
    <div className='cntRaitings'>
      <div className='raitingsTitle'>Mis calificaciones</div>
      <div className='cntCard'>
        <ComicCard />
      </div>
    </div>
  )
}
