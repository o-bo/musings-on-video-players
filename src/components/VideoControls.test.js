import React from 'react';
import { shallow } from 'enzyme';

import VideoControls from './VideoControls';

const controlsParams = {
  currentProgress: 0,
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

//
// it('initializes state with isPlaying at TRUE', () => {
//   const wrapper = shallow(<VideoContainer {...videoParams} />);
//   expect(wrapper.state().isPlaying).toBeTruthy();
// });
//
// it('initializes state with currentProgress at 0', () => {
//   const wrapper = shallow(<VideoContainer {...videoParams} />);
//   expect(wrapper.state().currentProgress).toEqual(0);
// });
//
// it('initializes state with startTime at 0', () => {
//   const wrapper = shallow(<VideoContainer {...videoParams} />);
//   expect(wrapper.state().startTime).toEqual(0);
// });
//
// it('initializes state with totalProgress at 0', () => {
//   const wrapper = shallow(<VideoContainer {...videoParams} />);
//   expect(wrapper.state().totalProgress).toEqual(0);
// });
//
// it('updates state\'s currentProgress when calling updateTime', () => {
//   const wrapper = shallow(<VideoContainer {...videoParams} />);
//   wrapper.instance().updateTime(2, 10);
//   expect(wrapper.state().currentProgress).toEqual(2);
// });
//
// it('updates state\'s totalProgress when calling updateTime', () => {
//   const wrapper = shallow(<VideoContainer {...videoParams} />);
//   wrapper.instance().updateTime(2, 10);
//   expect(wrapper.state().totalProgress).toEqual(10);
// });
//
// it('updates state\'s startTime when calling onTimeChange', () => {
//   const wrapper = shallow(<VideoContainer {...videoParams} />);
//   wrapper.instance().onTimeChange(20);
//   expect(wrapper.state().startTime).toEqual(20);
// });
//
// it('updates state\'s isPlaying when calling playPause', () => {
//   const wrapper = shallow(<VideoContainer {...videoParams} />);
//   wrapper.instance().playPause();
//   expect(wrapper.state().isPlaying).toBeFalsy();
//   wrapper.instance().playPause();
//   expect(wrapper.state().isPlaying).toBeTruthy();
// });
