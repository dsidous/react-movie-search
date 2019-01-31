import React from 'react';
import { shallow } from 'enzyme';
import WatchList from '.';

const mockProps = {
  config: {
    images: {
      base_url: 'path/to/image',
      secure_base_url: 'path/to/image',
      backdrop_sizes: ['1', '2', '3', '4'],
      poster_sizes: ['1', '2', '3', '4'],
      profile_sizes: ['1', '2', '3', '4'],
      still_sizes: ['1', '2', '3', '4'],
    },
  },
};

describe('Pages/WatchList', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<WatchList {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
