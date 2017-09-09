/* eslint-disable import/prefer-default-export */

/**
 * Build a string with a given time in seconds with the following format - mm:ss
 *
 * @param {number} seconds - the value in seconds to be displayed.
 */
export const secondsToMinutesInWords = seconds =>
  `${(`0${Math.floor(seconds / 60)}`).slice(-2)}:${(`0${seconds % 60}`).slice(-2)}`;


/* eslint-enable import/prefer-default-export */
