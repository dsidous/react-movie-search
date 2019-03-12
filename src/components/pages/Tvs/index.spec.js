import React from 'react';
import { shallow } from 'enzyme';
import Tvs from '.';

const defaultProps = {
  location: { search: '1' },
};

describe('Pages/Tvs', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Tvs {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
