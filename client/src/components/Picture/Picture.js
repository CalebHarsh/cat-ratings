import React, { Component } from 'react';
import './Picture.css';
import axios from 'axios';

class Picture extends Component {

  state = {
    src: ''
  }

  componentWillMount() {
    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(res => {
      return this.setState({ src: res.data[0].url });
    })
  }

  render() {
    return (
      <div className="container">
        <img src={this.state.src} />
      </div>

    )
  }

}

export default Picture;