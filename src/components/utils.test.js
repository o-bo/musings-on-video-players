import {
  secondsToMinutesInWords,
  positionInsideProgressInSeconds,
} from './utils';

it('builds 00:30', () => {
  expect(secondsToMinutesInWords(30)).toEqual('00:30');
});

it('builds 01:01', () => {
  expect(secondsToMinutesInWords(61)).toEqual('01:01');
});

it('builds 10:11', () => {
  expect(secondsToMinutesInWords(611)).toEqual('10:11');
});

it('computes the correct time position inside a rect according to a duration', () => {
  const insideRect = positionInsideProgressInSeconds({ width: 100, left: 100 });
  const rectForDuration = insideRect(60);
  const timeForPosition = rectForDuration(110);
  expect(timeForPosition).toEqual(6);
});
