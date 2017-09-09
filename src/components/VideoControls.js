import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { elapsedTimeInWords } from './utils';

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
          {elapsedTimeInWords(this.props.currentProgress, this.props.totalProgress)}
        </span>
      </div>
    );
  }
}
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */

export default VideoControls;
