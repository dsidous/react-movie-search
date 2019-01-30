import React from 'react';
import { shallow } from 'enzyme';
import WatchList from '.';

describe('Pages/WatchList', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<WatchList />);

    expect(wrapper).toMatchSnapshot();
  });
});
