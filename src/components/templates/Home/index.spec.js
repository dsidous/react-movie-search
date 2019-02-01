import React from 'react';
import { shallow } from 'enzyme';

import Home from '.';

const mockProps = {
  popular: [{
    id: 1,
    backdrop_path: 'path/to/image',
    poster_path: 'path/to/image',
    title: 'title',
    overview: 'overview',
    release_date: '01.01.2010',
    vote_average: 1,
    genre_ids: [1],
  },
  {
    id: 1,
    backdrop_path: 'path/to/image',
    poster_path: 'path/to/image',
    title: 'title',
    overview: 'overview',
    release_date: '01.01.2010',
    vote_average: 1,
    genre_ids: [1],
  },
  {
    id: 1,
    backdrop_path: 'path/to/image',
    poster_path: 'path/to/image',
    title: 'title',
    overview: 'overview',
    release_date: '01.01.2010',
    vote_average: 1,
    genre_ids: [1],
  },
  {
    id: 1,
    backdrop_path: 'path/to/image',
    poster_path: 'path/to/image',
    title: 'title',
    overview: 'overview',
    release_date: '01.01.2010',
    vote_average: 1,
    genre_ids: [1],
  },
  {
    id: 1,
    backdrop_path: 'path/to/image',
    poster_path: 'path/to/image',
    title: 'title',
    overview: 'overview',
    release_date: '01.01.2010',
    vote_average: 1,
    genre_ids: [1],
  },
  {
    id: 1,
    backdrop_path: 'path/to/image',
    poster_path: 'path/to/image',
    title: 'title',
    overview: 'overview',
    release_date: '01.01.2010',
    vote_average: 1,
    genre_ids: [1],
  },
  {
    id: 1,
    backdrop_path: 'path/to/image',
    poster_path: 'path/to/image',
    title: 'title',
    overview: 'overview',
    release_date: '01.01.2010',
    vote_average: 1,
    genre_ids: [1],
  },
  {
    id: 1,
    backdrop_path: 'path/to/image',
    poster_path: 'path/to/image',
    title: 'title',
    overview: 'overview',
    release_date: '01.01.2010',
    vote_average: 1,
    genre_ids: [2],
  }],
  popularLoading: false,
  nowPlayingLoading: false,
  upcomingLoading: false,
};

describe('Templates/Home', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Home {...mockProps} />);
    wrapper.setProps({ ...mockProps });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle filter function', () => {
    const wrapper = shallow(<Home {...mockProps} />);
    wrapper.setProps({ ...mockProps });
    wrapper.instance().filterTopMovies(2);

    expect(wrapper.state().topmovies.length).toEqual(1);
  });

  it('should handle filter function for more than 5 result', () => {
    const wrapper = shallow(<Home {...mockProps} />);
    wrapper.setProps({ ...mockProps });
    wrapper.instance().filterTopMovies(1);

    expect(wrapper.state().topmovies.length).toEqual(5);
  });

  it('should render spinner when loading', () => {
    const props = {
      nowPlayingLoading: true,
    };
    const wrapper = shallow(<Home {...mockProps} {...props} />);
    wrapper.setProps({ ...mockProps });
    expect(wrapper).toMatchSnapshot();
  });
});
