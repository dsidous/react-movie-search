import React from 'react';
import { shallow } from 'enzyme';
import Season from '.';

const defaultProps = {
  match: { params: { tvId: 123 } },
};

describe('Pages/Season', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Season {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
