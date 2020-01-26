import React from 'react';
import './ComicCard.scss';

export default function ComicCard(props) {
  console.log("propsComicCard", props)
  return(
    <div className='card'>
      <div className='nameCard'>{props.comicName}</div>
      <div className='rateCard'>{props.rate}/5</div>
    </div>
  )
}
