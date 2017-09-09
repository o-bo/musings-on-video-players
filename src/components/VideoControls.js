import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { secondsToMinutesInWords } from './utils';

import './VideoControls.css';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/**
 * VideosControls displays the play/pause button and the progress bar.
 * It delegates actions to the {@link VideoContainer}.
 *
 * @extends PureComponent - in order to update only when props change.
 */
class VideoControls extends PureComponent {
  static propTypes = {
    currentProgress: PropTypes.number.isRequired,
    totalProgress: PropTypes.number.isRequired,
    playPause: PropTypes.func.isRequired,
    onTimeChange: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  /**
   * Computes the new time where the video should be started according to where
   * the user clicked on the progress bar.
   * Then it calls the onTimeChange method from the props - {@link VideoContainer#onTimeChange}.
   *
   * @param {object} e - the click event on the progrss bar.
   */
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
    const playPauseIconPath = this.props.isPlaying
      ? 'M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z'
      : 'M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z';

    return (
      <div className="video-controls">
        <svg
          fill="white"
          width={23}
          height={23}
          onClick={this.props.playPause}
          style={{ padding: 5 }}
        >
          <path d={playPauseIconPath} />
        </svg>
        <span className="video-time">
          {secondsToMinutesInWords(parseInt(this.props.currentProgress, 10))}
        </span>
        <progress
          ref={(bar) => { this.progressBar = bar; }}
          value={this.props.currentProgress}
          max={this.props.totalProgress}
          onClick={this.changeCurrentTime}
        />
        <span className="video-time">
          {secondsToMinutesInWords(parseInt(this.props.totalProgress, 10))}
        </span>
      </div>
    );
  }
}
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */

export default VideoControls;
