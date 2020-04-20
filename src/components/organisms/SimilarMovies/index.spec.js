import React from 'react';
import { shallow } from 'enzyme';
import SimilarMovies from '.';

const mockProps = {
  similar: [
    {
      id: 1,
      poster_path: 'path/to/image',
      title: 'title',
    },
  ],
  handleMovieClick: jest.fn(() => {}),
};

describe('Organisms/SimilarMovies', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<SimilarMovies {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onClick event', () => {
    const wrapper = shallow(<SimilarMovies {...mockProps} />);

    wrapper.find('.similar-movies__element').first().simulate('click');
    expect(mockProps.handleMovieClick).toBeCalled();

    wrapper.find('.similar-movies__element').first().simulate('keyDown');
    expect(mockProps.handleMovieClick).toBeCalled();
  });
});
