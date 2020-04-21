import React from 'react';
import { shallow } from 'enzyme';
import Result from '.';

const mockProps = {
  shows: [
    {
      id: 1,
    },
  ],
  config: {
    images: {
      secure_base_url: 'path/to/image',
      poster_sizes: ['1', '2', '3', '4'],
    },
  },
  media: 'movie',
};

describe('Molecules/Result', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Result {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
