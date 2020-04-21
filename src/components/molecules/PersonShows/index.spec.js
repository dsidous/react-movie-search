import React from 'react';
import { shallow } from 'enzyme';
import PersonShows from '.';

const mockProps = {
  shows: {
    cast: [
      {
        id: 1,
        title: 'title',
        character: 'character',
        poster_path: 'path/to/image',
        release_date: '01.01.2010',
      },
      {
        id: 2,
        name: 'name',
        character: 'character',
        poster_path: 'path/to/image',
        first_air_date: '01.01.2011',
      },
    ],
  },
};

describe('Molecules/PersonShows', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<PersonShows {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
