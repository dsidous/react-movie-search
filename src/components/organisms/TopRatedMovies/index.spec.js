import React from 'react';
import { shallow } from 'enzyme';
import TopRatedMovies from '.';

const mockProps = {
  topMovies: [
    {
      id: 1,
      poster_path: 'path/to/poster',
      title: 'title',
      vote_average: '1',
      genre_names: {
        genre_name: ['genre'],
      },
    },
  ],
  filterTopMovies: jest.fn(() => { }),
};

describe('Organisms/TopRatedMovies', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<TopRatedMovies {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should filter movies by genre', () => {
    const wrapper = shallow(<TopRatedMovies {...mockProps} />);

    wrapper.find('[data-test=28] span').simulate('click');
    expect(wrapper.state().active).toBe(28);
  });
});
