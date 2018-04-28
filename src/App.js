import React, { Component } from 'react';
import axios from 'axios'
import Playlist from './playlist'
import './App.css';

class App extends Component {
  state = { images: []}

  componentDidMount () {
    axios('https://jsonplaceholder.typicode.com/photos')
      .then(res => this.setState({ images: res.data }))
  }

  render() {
    return (
      <div className="App">
        <Playlist images={this.state.images}/>
      </div>
    );
  }
}

export default App;
