import { secondsToMinutesInWords } from './utils';

it('builds 00:30', () => {
  expect(secondsToMinutesInWords(30)).toEqual('00:30');
});

it('builds 01:01', () => {
  expect(secondsToMinutesInWords(61)).toEqual('01:01');
});

it('builds 10:11', () => {
  expect(secondsToMinutesInWords(611)).toEqual('10:11');
});
