import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../../atoms/Spinner';
import Shows from '.';

const mockProps = {
  media: 'movies',
  resultMedia: 'movie',
  genres: [
    {
      id: 1,
      name: 'genrename',
    },
  ],
  query: '',
  config: {
    images: {
      secure_base_url: 'path/to/image',
      poster_sizes: ['1', '2', '3', '4'],
      backdrop_sizes: ['1', '2', '3', '4'],
    },
  },
  shows: [{}],
  loading: false,
  genresLoading: false,
  configLoading: false,
};

describe('Templates/Shows', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Shows {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading', () => {
    const wrapper = shallow(<Shows {...mockProps} loading />);

    expect(wrapper.find(Spinner).length).toBe(1);
  });
});
