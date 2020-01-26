import React from 'react';
import './RateComic.scss';
import { connect } from 'react-redux'
import refresh from '../assets/refrescar.png';
import Rating from '../Rating'
import {getComic} from '../services/api';

class RateComic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comicName: '',
      comicImg: '',
      comicId: '',
      rating: '',
      currentRating: ''
    };
  }

  randomComicId(min = 1, max = 2251) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount(){
    this.showComic();
  }

  showComic(){
    const comicId = this.randomComicId()

    getComic(comicId).then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        comicName: res.title,
        comicImg: res.img,
        comicId: res.num
      });
    });
  }

  refreshComic(){
    this.showComic();
  }

  render(){
    return(
    <div className='container'>
      <div className='comicTitle'>{this.state.comicName}</div>
      <div className='cntImage'>
        <img className='comicImage' src={this.state.comicImg} alt='' title={this.state.comicName}></img>
      </div>
      <div className='rateStars'>
        <Rating comicName={this.state.comicName} comicImg={this.state.comicImg} comicId={this.state.comicId} rate={this.props.rate}/>
      </div>
      <button className='refreshIcon' onClick={() => this.refreshComic()}>
        <img src={refresh} alt='' title='Refrescar cómic'></img>
      </button>
    </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {store};
}

const mapDispatchToProps = (dispatch) => {
  return {
    rate: (comic) => {
      dispatch({
        type: 'ADD',
        payload: comic
      })
    },
  }
}

const RateComicConnected = connect (
  mapStateToProps,
  mapDispatchToProps
)(RateComic)

export default RateComicConnected;
