import React, { Component } from 'react';
import PropTypes from 'prop-types';

const playerSizes = {
  small: {
    width: 320,
    height: 240,
  },
  medium: {
    width: 640,
    height: 480,
  },
  big: {
    width: 1080,
    height: 720,
  },
};

/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
class VideoPlayer extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'big']),
  }

  static defaultProps = {
    size: 'small',
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
      <div
        style={{
          margin: 10,
          ...playerSizes[this.props.size],
        }}
      >
        <video
          ref={(player) => { this.videoPlayer = player; }}
          autoPlay
          style={{
            width: '100%',
            height: 'auto',
          }}
        >
          <source
            {...this.props}
          />
          Your browser is not aware.
        </video>
        <div>
          <button onClick={this.playPause}>Play/Pause</button>
          <progress
            ref={(bar) => { this.progressBar = bar; }}
            value={this.state.currentProgress}
            max={this.state.totalProgress}
            onClick={this.setProgression}
          />
          <span>
            {parseInt(this.state.currentProgress, 10)}/{parseInt(this.state.totalProgress, 10)}
          </span>
        </div>
      </div>
    );
  }
}
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-enable jsx-a11y/media-has-caption */

export default VideoPlayer;
