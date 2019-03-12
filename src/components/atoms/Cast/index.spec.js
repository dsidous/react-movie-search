import React from 'react';
import { shallow } from 'enzyme';
import Cast from '.';

const defaultProps = {
  cast: {
    name: 'test',
    id: 1,
    character: 'test',
    profile_path: '/PSK6GmsVwdhqz9cd1lwzC6a7EA.jpg',
  },
  type: 'full',
};

describe('Atoms/Cast', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Cast {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
