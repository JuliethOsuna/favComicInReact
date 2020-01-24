import React from 'react';
import './RatingPage.scss';
import Nav from '../Nav';
import RateComic from '../RateComic';
import Ratings from '../Ratings';

export default function RatingPage(props) {
  return(
    <div>
      <Nav />
      <div className='ratingPage'>
        <RateComic className='rateComic'/>
        <Ratings className='ratings'/>
      </div>
    </div>
  )
}
