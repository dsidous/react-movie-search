import React from 'react';
import { shallow } from 'enzyme';

import WatchlistBookmark from '.';

const mockProps = {
  movie: {
    id: 1,
  },
  user: {},
};

describe('Atoms/WatchlistBookmark', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<WatchlistBookmark {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
