import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
class VideoPlayer extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  state = {
    currentProgress: 0,
    totalProgress: 0,
  }

  componentDidMount() {
    this.videoPlayer.ontimeupdate = this.updateTime;
  }

  setProgression = (e) => {
    const progressBoundingRect = this.progressBar.getBoundingClientRect();
    const {
      width,
      left,
    } = progressBoundingRect;
    const offset = e.pageX - left;
    const offsetInSeconds = (offset * this.videoPlayer.duration) / width;
    this.videoPlayer.currentTime = offsetInSeconds;
  }

  updateTime = () => {
    this.setState(prevState => ({
      currentProgress: this.videoPlayer.currentTime,
      totalProgress: prevState.totalProgress !== this.videoPlayer.duration
        ? this.videoPlayer.duration
        : prevState.totalProgress,
    }));
  }

  playPause = () => {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
    } else {
      this.videoPlayer.pause();
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={this.playPause}>Play/Pause</button>
        <progress
          ref={(bar) => { this.progressBar = bar; }}
          value={this.state.currentProgress}
          max={this.state.totalProgress}
          onClick={this.setProgression}
        />
        <span>{this.state.currentProgress}/{this.state.totalProgress}</span>
        <video
          ref={(player) => { this.videoPlayer = player; }}
          width="1080"
          height="720"
          autoPlay
        >
          <source
            {...this.props}
          />
          Your browser is not aware.
        </video>
      </div>
    );
  }
}
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-enable jsx-a11y/media-has-caption */

export default VideoPlayer;
