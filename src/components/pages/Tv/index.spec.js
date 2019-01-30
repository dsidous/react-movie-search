import React from 'react';
import { shallow } from 'enzyme';
import Tv from '.';

describe('Pages/Tv', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Tv />);

    expect(wrapper).toMatchSnapshot();
  });
});
