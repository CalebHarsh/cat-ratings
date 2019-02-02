import React, { Component } from "react";

import { Provider } from 'react-redux';

import Picture from './components/Picture';
import "./App.css";

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div>
          <h1>Cat Rankings</h1> 
          <Picture />
        </div>
      </Provider>

    );
  }
}

export default App;
