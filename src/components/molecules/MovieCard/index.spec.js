import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '.';

const mockProps = {
  movie: {
    id: 1,
    backdrop_path: 'path/to/image',
    poster_path: 'path/to/image',
    genres: [
      {
        id: 1,
        genre_name: 'genre',
      },
    ],
    name: 'name',
    release_date: '01.01.2010',
    vote_average: 1,
    overview: 'overview',
  },
  media: 'movie',
  img_base_path: 'path/to/image',
};

describe('Molecules/MovieCard', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<MovieCard {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
