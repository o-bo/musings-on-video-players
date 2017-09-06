import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* eslint-disable jsx-a11y/media-has-caption */
class App extends Component {
  playPause = () => {
    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Musings on video players with React</h2>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={this.playPause}>Play/Pause</button>
          <video
            ref={(v) => { this.video = v; }}
            width="640"
            height="480"
            autoPlay
          >
            <source src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" type="video/mp4" />
            Your browser is not aware.
          </video>
        </div>
      </div>
    );
  }
}
/* eslint-enable jsx-a11y/media-has-caption */

export default App;
