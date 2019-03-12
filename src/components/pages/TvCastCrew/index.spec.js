import React from 'react';
import { shallow } from 'enzyme';
import ShowCastCrew from '.';

const defaultProps = {
  match: { params: { tvId: 123 } },
};

describe('Pages/TvCastCrew', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<ShowCastCrew {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
