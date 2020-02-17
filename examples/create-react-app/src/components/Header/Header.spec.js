import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header suite', () => {
  it('renders Header without any state injected', () => {
    const component = shallow(<Header />);
    expect(component).toBeDefined();
  });
});
