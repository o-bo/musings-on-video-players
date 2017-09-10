import React from 'react';
import { mount } from 'enzyme';

import VideoPlayer from './VideoPlayer';

const playerParams = {
  src: 'https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4',
  type: 'video/mp4',
  onTimeUpdate: jest.fn(),
};

it('calls onTimeUpdate when timeUpdate is called', () => {
  const wrapper = mount(<VideoPlayer {...playerParams} />);
  wrapper.instance().timeUpdate();
  expect(wrapper.prop('onTimeUpdate')).toHaveBeenCalled();
});

it('calls video.play and pause when isPlaying is changing', () => {
  const wrapper = mount(<VideoPlayer {...playerParams} />);
  const spyPlay = jest.spyOn(wrapper.instance().videoPlayer, 'play');
  const spyPause = jest.spyOn(wrapper.instance().videoPlayer, 'pause');
  wrapper.setProps({ isPlaying: false });
  expect(spyPause).toHaveBeenCalled();
  wrapper.setProps({ isPlaying: true });
  expect(spyPlay).toHaveBeenCalled();
});

it('changes the time on the player when changed in props', () => {
  const wrapper = mount(<VideoPlayer {...playerParams} />);
  wrapper.setProps({ currentTime: 10 });
  expect(wrapper.instance().videoPlayer.currentTime).toEqual(10);
});
