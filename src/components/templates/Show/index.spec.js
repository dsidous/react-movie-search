import React from 'react';
import { shallow } from 'enzyme';

import ShowProfile from '../../organisms/ShowProfile';
import Show from '.';

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
    title: 'title',
  },
  loading: false,
  genresLoading: false,
  configLoading: false,
};

const context = { router: { history: ['/movie'] } };

describe('Templates/Show', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Show {...mockProps} />, { context });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render as expected with new props', () => {
    const wrapper = shallow(<Show {...mockProps} />, { context });
    mockProps.show.id = 141052;
    wrapper.setProps({ ...mockProps });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading', () => {
    const wrapper = shallow(<Show {...mockProps} loading />, { context });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle show click', () => {
    const wrapper = shallow(<Show {...mockProps} />, { context });
    const newMovieId = 2;
    wrapper.find(ShowProfile).props().handleShowClick(newMovieId);

    expect(wrapper.context().router.history.includes(`/movie/${newMovieId}`)).toBe(true);
  });

  it('should handle full crew click', () => {
    const wrapper = shallow(<Show {...mockProps} />, { context });
    wrapper.find(ShowProfile).props().handleFullCrewClick();

    expect(wrapper.context().router.history.includes(`/movie/${mockProps.show.id}/crew`)).toBe(true);
  });
});
