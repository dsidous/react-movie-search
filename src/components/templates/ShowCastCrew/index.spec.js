import React from 'react';
import { shallow } from 'enzyme';
import CastCrew from '.';

const mockProps = {
  show: {
    name: 'name',
    first_air_date: '01.01.2010',
    poster_path: 'path/to/image',
    id: 1,
  },
  loading: false,
};

describe('Templates/ShowCastCrew', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<CastCrew {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading expected', () => {
    const wrapper = shallow(<CastCrew {...mockProps} loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
