import React from 'react';
import { shallow } from 'enzyme';
import Show from '.';

describe('Pages/Show', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Show />);

    expect(wrapper).toMatchSnapshot();
  });
});
