import React from 'react';
import { shallow } from 'enzyme';
import Season from '.';

const mockProps = {
  season: {
    poster_path: 'path/to/image',
    overview: 'overview',
    name: 'name',
    episode_count: 3,
    air_date: '01.01.2010',
    season_number: 2,
  },
  tvId: 1,
};

describe('Molecules/Season', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Season {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
