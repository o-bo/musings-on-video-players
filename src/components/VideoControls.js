import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
class VideoControls extends Component {
  static propTypes = {
    currentProgress: PropTypes.number.isRequired,
    totalProgress: PropTypes.number.isRequired,
    playPause: PropTypes.func.isRequired,
    onTimeChange: PropTypes.func.isRequired,
  };

  changeCurrentTime = (e) => {
    const progressBoundingRect = this.progressBar.getBoundingClientRect();
    const {
      width,
      left,
    } = progressBoundingRect;
    const offset = e.pageX - left;
    const startTime = (offset * this.props.totalProgress) / width;

    this.props.onTimeChange(startTime);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.playPause}>Play/Pause</button>
        <progress
          ref={(bar) => { this.progressBar = bar; }}
          value={this.props.currentProgress}
          max={this.props.totalProgress}
          onClick={this.changeCurrentTime}
        />
        <span>
          {parseInt(this.props.currentProgress, 10)}/{parseInt(this.props.totalProgress, 10)}
        </span>
      </div>
    );
  }
}
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */

export default VideoControls;
