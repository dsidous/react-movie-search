import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '.';

describe('Layouts/MainLayout', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<MainLayout />);

    expect(wrapper).toMatchSnapshot();
  });
});
