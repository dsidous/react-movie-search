import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';

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

    wrapper.find(Button).first().simulate('click');
    expect(mockProps.handlePageSelect).toHaveBeenCalled();
  });
});
