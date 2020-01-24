import React from 'react';
import './ComicCard.scss';

export default function ComicCard(props) {
  return(
    <div className='card'>
      <div className='nameCard'>Nombre del cómic</div>
      <div className='rateCard'>4/5</div>
    </div>
  )
}
