import React from 'react';
import { connect } from 'react-redux'
import './Ratings.scss';
import ComicCard from '../ComicCard';

function Ratings(props) {
  console.log("propsRatings", props)
  return(
    <div className='cntRaitings'>
      <div className='raitingsTitle'>Mis calificaciones</div>
      <div className='cntCard'>
        {props.infoComics.map((element, index) => (
          <ComicCard key={index} comicName={element.comicName} comicImg={element.comicImg} comicId={element.comicId} rate={element.rate}/>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  console.log("store", store)
  return {
    infoComics: store.infoComics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const RatingsConnected = connect (
  mapStateToProps,
  mapDispatchToProps
)(Ratings)

export default RatingsConnected;
