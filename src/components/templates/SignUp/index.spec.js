import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage from '.';

describe('Templates/SignUpPage', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<SignUpPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
