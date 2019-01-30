import React from 'react';
import { shallow } from 'enzyme';
import Shows from '.';

const defaultProps = {
  location: { search: '1' },
};

describe('Pages/Movies', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Shows {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
