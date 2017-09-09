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
