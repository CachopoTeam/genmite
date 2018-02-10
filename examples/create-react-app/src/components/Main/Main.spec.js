import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './AddArticle';

describe('Main suite', () => {
  it('renders Main without any state injected', () => {
    const component = shallow(<Main />);
    expect(component).toBeDefined();
  });
});
