import React from 'react';
import { shallow } from 'enzyme';

import MyPager from '.';

const mockProps = {
  page: 1,
  handlePageSelect: jest.fn(),
};

describe('Atoms/MyPager', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<MyPager {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onSelect event', () => {
    const wrapper = shallow(<MyPager {...mockProps} />);

    wrapper.find(Pager.Item).first().simulate('click');
    expect(mockProps.handlePageSelect).toHaveBeenCalled();
  });
});
