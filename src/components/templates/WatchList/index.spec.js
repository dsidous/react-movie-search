import React from 'react';
import { shallow } from 'enzyme';
import WatchList from '.';

const mockProps = {
  config: {
    images: {
      secure_base_url: 'path/to/image',
      poster_sizes: ['1', '2', '3', '4'],
    },
  },
  configLoading: false,
};

describe('Templates/WatchList', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<WatchList {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading', () => {
    const wrapper = shallow(<WatchList {...mockProps} configLoading />);

    expect(wrapper).toMatchSnapshot();
  });
});
