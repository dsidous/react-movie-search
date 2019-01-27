import React from 'react';
import { shallow } from 'enzyme';

import HomeList from '.';

const mockProps = {
  title: 'title',
  list: [
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
  goToMovie: jest.fn(),
};

describe('Atoms/HomeList', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<HomeList {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onClick event', () => {
    const wrapper = shallow(<HomeList {...mockProps} />);

    wrapper.find('.home-list__list-element').simulate('click');
    expect(mockProps.goToMovie).toHaveBeenCalled();

    wrapper.find('.home-list__list-element').simulate('keyDown');
    expect(mockProps.goToMovie).toHaveBeenCalled();
  });
});
