import React from 'react';
import { shallow } from 'enzyme';
import Tv from '.';

const defaultProps = {
  match: { params: { tvId: '1' } },
};

describe('Pages/Tv', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Tv {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
