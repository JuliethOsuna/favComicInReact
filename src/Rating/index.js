import React from 'react';
import './Rating.scss';
import fillStar from '../assets/estrella-llena.png';
import emptyStar from '../assets/estrella-vacia.png';

const starsArray = Array(5).fill(null);

export default function Rating(props) {
  return(
    <div className='cntStars'>
    {starsArray.map(() => (
      <button className='btnStars'>
        <img className='stars' src={fillStar} alt=''></img>
      </button>
    ))}
    </div>
  )
}

