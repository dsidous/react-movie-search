import React from 'react';
import { shallow } from 'enzyme';
import MainNavbar from '.';

describe('Pages/MainNavbar', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<MainNavbar />);

    expect(wrapper).toMatchSnapshot();
  });
});
