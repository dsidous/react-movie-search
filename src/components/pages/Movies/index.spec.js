import React from 'react';
import { shallow } from 'enzyme';
import Shows from '.';

describe('Pages/Shows', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Shows />);

    expect(wrapper).toMatchSnapshot();
  });
});
