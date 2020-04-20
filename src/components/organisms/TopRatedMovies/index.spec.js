import React, { useState as useStateMock } from 'react';
import { shallow } from 'enzyme';
import TopRatedMovies from '.';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const mockProps = {
  popular: [
    {
      id: 1,
      poster_path: 'path/to/poster',
      title: 'title',
      vote_average: '1',
      genre_ids: [28],
    },
    {
      id: 2,
      poster_path: 'path/to/poster',
      title: 'title',
      vote_average: '1',
      genre_ids: [28],
    },
    {
      id: 3,
      poster_path: 'path/to/poster',
      title: 'title',
      vote_average: '1',
      genre_ids: [28],
    },
    {
      id: 4,
      poster_path: 'path/to/poster',
      title: 'title',
      vote_average: '1',
      genre_ids: [28],
    },
    {
      id: 5,
      poster_path: 'path/to/poster',
      title: 'title',
      vote_average: '1',
      genre_ids: [28],
    },
    {
      id: 6,
      poster_path: 'path/to/poster',
      title: 'title',
      vote_average: '1',
      genre_ids: [28],
    },
  ],
};

describe('Organisms/TopRatedMovies', () => {
  let wrapper;
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState]);
    wrapper = shallow(<TopRatedMovies {...mockProps} />);
  });

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should filter movies by genre', () => {
    wrapper.find('[data-test=28] span').props().onClick();

    expect(setState).toHaveBeenCalledWith(28);
  });

  it('should handle filter function for more than 5 result', () => {
    wrapper.find('[data-test=28] span').props().onClick();

    expect(wrapper.find('.top-list__element-title').length).toEqual(5);
  });
});
