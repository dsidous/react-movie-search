import React from 'react';
import { shallow } from 'enzyme';
import ShowProfile from '.';

const mockProps = {
  config: {
    images: {
      secure_base_url: 'path/to/image',
      poster_sizes: ['1', '2', '3', '4'],
      backdrop_sizes: ['1', '2', '3', '4'],
    },
  },
  show: {
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
    reviews: {},
    runtime: 'runtime',
    vote_average: 1,
    tagline: 'tagline',
    overview: 'overview',
    images: {
      backdrops: [{ file_path: 'path/to/image' }],
    },
    videos: [{ type: 'trailer' }],
    similar: {
      results: [],
    },
    credits: {
      cast: [],
      crew: [],
    },
    seasons: [],
  },
  dcolor: [1, 2, 3],
  handleFullCrewClick: jest.fn(),
  handleShowClick: jest.fn(),
};

describe('Organisms/ShowProfile', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<ShowProfile {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
