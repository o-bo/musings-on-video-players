/* eslint-disable no-undef */
import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('mounts without crashing', () => {
  mount(<App />);
});

it('renders header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header')).toHaveLength(1);
});

it('renders logo', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-logo')).toHaveLength(1);
});

it('renders title', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h2')).toHaveLength(1);
});

/* eslint-enable no-undef */
