import React from 'react';
import { shallow } from 'enzyme';
import Login from '.';

describe('Pages/Login', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
});
