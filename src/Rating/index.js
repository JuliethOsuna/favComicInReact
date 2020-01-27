import React from 'react';
import './Rating.scss';
import fillStar from '../assets/estrella-llena.png';
import emptyStar from '../assets/estrella-vacia.png';

const starsArray = [1, 2, 3, 4, 5];

export default function Rating(props) {
  return(
    <div className='cntStars'>
    {starsArray.map((position, index) => (
      <button className='btnStars' key={index} onClick={() => props.rate({
        comicName: props.comicName,
        comicImg: props.comicImg,
        comicId: props.comicId,
        rate: position
      })}>
        <img className='stars' src={fillStar} alt=''></img>
      </button>
    ))}
    </div>
  )
}

