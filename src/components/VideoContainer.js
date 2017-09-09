import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from './VideoPlayer';
import VideoControls from './VideoControls';

/** 3 sizes of players are available */
const playerSizes = {
  small: {
    width: 320,
    height: 'auto',
  },
  medium: {
    width: 640,
    height: 'auto',
  },
  big: {
    width: 1080,
    height: 'auto',
  },
};

/**
 * VideoContainer handles actions on controls and manage the state of the component.
 * It is composed of one instance of {@link VideoPlayer} and one instance of {@link VideoControls}.
 *
 * @extends Component
 */
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

  /**
   * Update the state with the given startTime.
   * Used when the user clicks somewhere on the progres bar.
   *
   * @param {number} startTime - the time in seconds where the {@link VideoPlayer} should be set.
   */
  onTimeChange = (startTime) => {
    this.setState(() => ({
      startTime,
    }));
  }

  /**
   * Update the state with the current position of the video and the total duration.
   * Used in order to update the progress bar in {@link VideoControls}.
   *
   * @param {number} currentTime - the current time in seconds of the video.
   * @param {number} duration - the total duration of the video.
   */
  updateTime = (currentTime, duration) => {
    this.setState(prevState => ({
      currentProgress: currentTime,
      totalProgress: prevState.totalProgress !== duration
        ? duration
        : prevState.totalProgress,
    }));
  }

  /**
   * Update the state with a flag indicating if the {@link VideoPlayer} is currently playing.
   * Used when the user clicks on the play/pause button in {@link VideoControls}.
   */
  playPause = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
    }));
  }

  render() {
    return (
      <div
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: '#322c35',
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
          isPlaying={this.state.isPlaying}
        />
      </div>
    );
  }
}

export default VideoContainer;
