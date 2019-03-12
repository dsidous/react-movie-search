import React from 'react';
import { shallow } from 'enzyme';
import TopPeople from '.';

const defaultProps = {
  location: { search: '1' },
};

describe('Pages/TopPeople', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<TopPeople {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
