/* eslint-disable import/prefer-default-export */

/**
 * Build a string with a given time in seconds with the following format - mm:ss
 *
 * @param {number} seconds - the value in seconds to be displayed.
 */
export const secondsToMinutesInWords = seconds =>
  `${(`0${Math.floor(seconds / 60)}`).slice(-2)}:${(`0${seconds % 60}`).slice(-2)}`;

  /**
   * Compute the click position inside a progress bar in seconds according to
   * a give duration.
   *
   * @param {object} progressBoundingRect - the layout of the progress bar with
   * specific attributes : width and left.
   * @param {number} positionX - the x position of the click event inside the progress bar.
   * @param {number} totalDuration - the duration to be taken into account.
   */
export const positionInsideProgressInSeconds =
  progressBoundingRect => totalDuration => (positionX) => {
    const {
      width,
      left,
    } = progressBoundingRect;
    const offset = positionX - left;
    return (offset * totalDuration) / width;
  };

/* eslint-enable import/prefer-default-export */
