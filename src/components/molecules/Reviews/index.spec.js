import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '.';

const mockProps = {
  reviews: [
    {
      id: 1,
      author: 'Author',
      content: 'content',
    },
  ],
};

describe('Molecules/Reviews', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Reviews {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
