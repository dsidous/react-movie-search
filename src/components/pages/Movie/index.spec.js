import React from 'react';
import { shallow } from 'enzyme';
import Show from '.';

const defaultProps = {
  match: { params: { movieId: '1' } },
};

describe('Pages/Movie', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Show {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
