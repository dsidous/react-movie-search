import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '.';

describe('Pages/SignUp', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<SignUp />);

    expect(wrapper).toMatchSnapshot();
  });
});
