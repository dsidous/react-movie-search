import React from 'react';
import { shallow } from 'enzyme';

import Filter from '../../organisms/Filter';
import Shows from '.';

const mockProps = {
  media: 'movies',
  genres: [{
    id: 1,
    name: 'genrename',
  }],
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

const context = { router: { history: ['/movies'] } };

describe('Templates/Shows', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Shows {...mockProps} />, { context });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading', () => {
    const wrapper = shallow(<Shows {...mockProps} loading />, { context });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle filter change', () => {
    const wrapper = shallow(<Shows {...mockProps} />, { context });
    wrapper.find(Filter).props().queryUpdate('page=2');

    expect(wrapper.context().router.history.includes('/movies?page=2')).toBe(true);
  });
});
