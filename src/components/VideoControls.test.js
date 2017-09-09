import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';

import VideoControls from './VideoControls';

const controlsParams = {
  currentProgress: 18,
  totalProgress: 60,
  playPause: () => true,
  onTimeChange: () => true,
  isPlaying: true,
};

it('renders a play icon with isPlaying at false', () => {
  const wrapper = shallow(<VideoControls {...controlsParams} isPlaying={false} />);
  expect(wrapper.instance().playPauseIcon()).toEqual('M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z');
});

it('renders a pause icon with isPlaying at true', () => {
  const wrapper = shallow(<VideoControls {...controlsParams} />);
  expect(wrapper.instance().playPauseIcon()).toEqual('M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z');
});

test('VideoControlsTest renders correctly in pause', () => {
  const tree = renderer.create(
    <VideoControls {...controlsParams} isPlaying={false} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('VideoControlsTest renders correctly in play', () => {
  const tree = renderer.create(
    <VideoControls {...controlsParams} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
