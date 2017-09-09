import React from 'react';
import { shallow } from 'enzyme';

import VideoContainer from './VideoContainer';

const videoParams = {
  src: 'url',
  type: 'mp4',
};

it('renders player', () => {
  const wrapper = shallow(<VideoContainer {...videoParams} />);
  expect(wrapper.find('.video-container')).toHaveLength(1);
});

it('initializes state with isPlaying at TRUE', () => {
  const wrapper = shallow(<VideoContainer {...videoParams} />);
  expect(wrapper.state().isPlaying).toBeTruthy();
});

it('initializes state with currentProgress at 0', () => {
  const wrapper = shallow(<VideoContainer {...videoParams} />);
  expect(wrapper.state().currentProgress).toEqual(0);
});

it('initializes state with startTime at 0', () => {
  const wrapper = shallow(<VideoContainer {...videoParams} />);
  expect(wrapper.state().startTime).toEqual(0);
});

it('initializes state with totalProgress at 0', () => {
  const wrapper = shallow(<VideoContainer {...videoParams} />);
  expect(wrapper.state().totalProgress).toEqual(0);
});

it('updates state\'s currentProgress when calling updateTime', () => {
  const wrapper = shallow(<VideoContainer {...videoParams} />);
  wrapper.instance().updateTime(2, 10);
  expect(wrapper.state().currentProgress).toEqual(2);
});

it('updates state\'s totalProgress when calling updateTime', () => {
  const wrapper = shallow(<VideoContainer {...videoParams} />);
  wrapper.instance().updateTime(2, 10);
  expect(wrapper.state().totalProgress).toEqual(10);
});

it('updates state\'s startTime when calling onTimeChange', () => {
  const wrapper = shallow(<VideoContainer {...videoParams} />);
  wrapper.instance().onTimeChange(20);
  expect(wrapper.state().startTime).toEqual(20);
});

it('updates state\'s isPlaying when calling playPause', () => {
  const wrapper = shallow(<VideoContainer {...videoParams} />);
  wrapper.instance().playPause();
  expect(wrapper.state().isPlaying).toBeFalsy();
  wrapper.instance().playPause();
  expect(wrapper.state().isPlaying).toBeTruthy();
});
