import React from 'react';
import { shallow } from 'enzyme';
import Seasons from '.';

const defaultProps = {
  match: { params: { tvId: 123 } },
};

describe('Pages/Seasons', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Seasons {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
