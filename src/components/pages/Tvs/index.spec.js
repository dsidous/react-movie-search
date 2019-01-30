import React from 'react';
import { shallow } from 'enzyme';
import Tvs from '.';

describe('Pages/Tvs', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Tvs />);

    expect(wrapper).toMatchSnapshot();
  });
});
