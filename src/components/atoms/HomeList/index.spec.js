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
};

describe('Atoms/HomeList', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<HomeList {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
