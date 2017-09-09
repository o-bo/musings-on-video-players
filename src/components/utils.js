/**
 * Build a string with a given time in seconds with the following format - mm:ss
 *
 * @param {number} seconds - the value in seconds to be displayed.
 */
export const secondsToMinutesInWords = seconds =>
  `${(`0${Math.floor(seconds / 60)}`).slice(-2)}:${(`0${seconds % 60}`).slice(-2)}`;


/**
 * Build a string with an elapsed time.
 * Format : current_time_in_minutes/total_time_in_minutes
 *
 * @param {number} current - the current time value.
 * @param {number} total - the total time value.
 */
export const elapsedTimeInWords = (current, total) =>
  `${secondsToMinutesInWords(parseInt(current, 10))}/${secondsToMinutesInWords(parseInt(total, 10))}`;
