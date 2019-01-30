import React from 'react';
import { shallow } from 'enzyme';
import PersonImages from '.';

const defaultProps = {
  match: { params: { personId: 123 } },
};

describe('Pages/PersonImages', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<PersonImages {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
