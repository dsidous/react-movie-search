import React from 'react';
import { shallow } from 'enzyme';
import Season from '.';

const mockProps = {
  tvSeason: {
    name: 'name',
    air_date: '01.01.2010',
    episodes: [
      {
        episode_number: 1,
      },
    ],
    poster_path: 'path/to/image',
  },
  tvId: 1,
  loading: false,
};

describe('Templates/Season', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Season {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading expected', () => {
    const wrapper = shallow(<Season {...mockProps} loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
