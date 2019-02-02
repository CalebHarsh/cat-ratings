import React, { Component } from 'react';
import './Picture.css';
import { connect } from 'react-redux';
import { fetchPic } from '../../actions/picAction';
import { createVote } from '../../actions/voteActions';
import Swipe from 'react-swipe-component';
import { USER_ID } from '../../env'

class Picture extends Component {
  constructor() {
    super()

    this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this)
    this.onSwipeRightListener = this._onSwipeRightListener.bind(this)
  }

  componentWillMount() {
    this.props.fetchPic()
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="helper">
          <Swipe
            nodeName="div"
            className='wrapper'
            onSwipedLeft={this.onSwipeLeftListener}
            onSwipedRight={this.onSwipeRightListener}
          >
            <img id='catImg' className="" src={this.props.src} alt="Funny cat gif" /> 
            <div className="place"></div>
          </Swipe>
         
        </div>
        <h4>Swip left to Like <br /> or <br /> Swip right to Hate</h4>
      </div>

    )
  }

  _onSwipeLeftListener() {
    const vote = {
      image_id: this.props.imgId,
      value: 0,
      sub_id: USER_ID
    }

    this.props.createVote(vote)
    document.getElementById("catImg").classList.toggle("toTheLeft");
    setTimeout(() => document.getElementById("catImg").classList.toggle('toTheLeft'), 1000)

  }
  _onSwipeRightListener() {
    const vote = {
      image_id: this.props.imgId,
      value: 1,
      sub_id: USER_ID
    }

    this.props.createVote(vote)
    document.getElementById("catImg").classList.toggle("toTheRight");
    setTimeout(() => document.getElementById("catImg").classList.toggle('toTheRight'), 1000)
  }

}

const mapStateToProps = state => ({
  src: state.pic.src,
  imgId: state.pic.img_id
})

export default connect(mapStateToProps, { fetchPic, createVote })(Picture);