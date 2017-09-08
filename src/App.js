import React from 'react';

import VideoPlayer from './components/VideoPlayer';

import logo from './logo.svg';
import './App.css';

export default () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Musings on video players with React</h2>
    </div>

    <VideoPlayer
      src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4"
      type="video/mp4"
    />
  </div>
);
