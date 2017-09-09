import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/media-has-caption */
/**
 * VideoPlayer displays the surface where the video should be played.
 * It delegates actions to the {@link VideoContainer}.
 *
 * @extends PureComponent - in order to update only when props change.
 */
class VideoPlayer extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onTimeUpdate: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool,
    currentTime: PropTypes.number,
  }

  static defaultProps = {
    isPlaying: true,
    currentTime: 0,
  }

  /**
   * Specifc React lifecycle method.
   * Update the player's currentTime position according to the props.
   * Start or pause the player according to the props.
   *
   * @param {object} prevProps - the previous props of the component.
   */
  componentDidUpdate(prevProps) {
    if (this.props.isPlaying) {
      this.videoPlayer.play();
    } else {
      this.videoPlayer.pause();
    }
    if (prevProps.currentTime !== this.props.currentTime) {
      this.videoPlayer.currentTime = this.props.currentTime;
    }
  }

  /**
   * Get the new currentTime and duration from the player.
   * Then it calls the onTimeUpdate method from the props - {@link VideoContainer#onTimeUpdate}.
   */
  timeUpdate = () => {
    const {
      currentTime,
      duration,
    } = this.videoPlayer;

    this.props.onTimeUpdate(currentTime, duration);
  }

  render() {
    return (
      <video
        ref={(player) => { this.videoPlayer = player; }}
        autoPlay
        style={{
          width: '100%',
          height: 'auto',
        }}
        onTimeUpdate={this.timeUpdate}
      >
        <source
          src={this.props.src}
          type={this.props.type}
        />
        Your browser is not aware.
      </video>
    );
  }
}
/* eslint-enable jsx-a11y/media-has-caption */

export default VideoPlayer;
