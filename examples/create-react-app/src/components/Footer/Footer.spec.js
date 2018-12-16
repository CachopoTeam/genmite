import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('Footer suite', () => {
  it('renders Footer without any state injected', () => {
    const component = shallow(<Footer />);
    expect(component).toBeDefined();
  });
});
