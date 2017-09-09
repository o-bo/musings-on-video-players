import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/media-has-caption */
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

  timeUpdate = () => {
    const {
      currentTime,
      duration,
    } = this.videoPlayer;

    this.props.onTimeUpdate({
      currentTime,
      duration,
    });
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
