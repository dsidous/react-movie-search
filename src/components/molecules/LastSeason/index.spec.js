import React from 'react';
import { shallow } from 'enzyme';
import LastSeason from '.';

const mockProps = {
  tvId: 1,
  season: {
    season_id: 1,
  },
};

describe('Molecules/LastSeason', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<LastSeason {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
