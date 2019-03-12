import React from 'react';
import { shallow } from 'enzyme';
import Episode from '.';

const mockProps = {
  episode: {
    name: 'name',
    air_date: '10.10.2010',
    episode_number: 3,
    overview: 'overview',
    still_path: 'path/to/image',
  },
};

describe('Molecules/Episode', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Episode {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
