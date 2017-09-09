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
