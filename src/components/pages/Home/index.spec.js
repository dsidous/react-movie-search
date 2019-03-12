import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

describe('Pages/Home', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
