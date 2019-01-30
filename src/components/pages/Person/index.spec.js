import React from 'react';
import { shallow } from 'enzyme';
import Person from '.';

const defaultProps = {
  match: { params: { personId: 123 } },
};

describe('Pages/Person', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Person {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
