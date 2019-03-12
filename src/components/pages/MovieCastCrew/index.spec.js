import React from 'react';
import { shallow } from 'enzyme';
import ShowCastCrew from '.';

const defaultProps = {
  match: { params: { movieId: 123 } },
};

describe('Pages/MovieCastCrew', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<ShowCastCrew {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
