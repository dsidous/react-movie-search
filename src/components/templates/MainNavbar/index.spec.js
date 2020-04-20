import React from 'react';
import { shallow } from 'enzyme';

import MainNavbar from '.';

const mockProps = {
  config: {
    images: {
      secure_base_url: 'path/to/image',
      profile_sizes: ['1', '2', '3', '4'],
      poster_sizes: ['1', '2', '3', '4'],
      backdrop_sizes: ['1', '2', '3', '4'],
    },
  },
};

describe('Templates/MainNavbar', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<MainNavbar {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
