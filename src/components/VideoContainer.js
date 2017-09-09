import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from './VideoPlayer';
import VideoControls from './VideoControls';

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

class VideoContainer extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'big']),
  }

  static defaultProps = {
    size: 'small',
  }

  state = {
    isPlaying: true,
    currentProgress: 0,
    startTime: 0,
    totalProgress: 0,
  }

  onTimeChange = (startTime) => {
    this.setState(() => ({
      startTime,
    }));
  }

  updateTime = ({
    currentTime,
    duration,
  }) => {
    this.setState(prevState => ({
      currentProgress: currentTime,
      totalProgress: prevState.totalProgress !== duration
        ? duration
        : prevState.totalProgress,
    }));
  }

  playPause = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
      currentTime: prevState.currentProgress,
    }));
  }

  render() {
    return (
      <div
        style={{
          margin: 10,
          ...playerSizes[this.props.size],
        }}
      >
        <VideoPlayer
          src={this.props.src}
          type={this.props.type}
          onTimeUpdate={this.updateTime}
          isPlaying={this.state.isPlaying}
          currentTime={this.state.startTime}
        />

        <VideoControls
          currentProgress={this.state.currentProgress}
          totalProgress={this.state.totalProgress}
          playPause={this.playPause}
          onTimeChange={this.onTimeChange}
        />
      </div>
    );
  }
}

export default VideoContainer;
