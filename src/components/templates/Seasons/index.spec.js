import React from 'react';
import { shallow } from 'enzyme';
import Seasons from '.';

const mockProps = {
  show: {
    name: 'name',
    first_air_date: '01.01.2010',
    seasons: [
      {
        season_number: 1,
      },
      {
        season_number: 2,
      },
    ],
    poster_path: 'path/to/image',
    id: 1,
  },
  loading: false,
};

describe('Templates/Seasons', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Seasons {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading expected', () => {
    const wrapper = shallow(<Seasons {...mockProps} loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
