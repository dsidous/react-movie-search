import React from 'react';
import { shallow } from 'enzyme';

import Review from '.';

const mockProps = {
  review: {
    id: 1,
    author: 'Author',
    content: 'content',
  },
};

describe('Atoms/Review', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Review {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
