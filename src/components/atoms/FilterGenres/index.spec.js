import React from 'react';
import { shallow } from 'enzyme';
import FilterGenres from '.';

const mockProps = {
  genres: [
    {
      id: 1,
      name: 'genre',
    },
  ],
  value: 'genre',
  onChange: jest.fn(),
};

describe('Atoms/FilterGenres', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<FilterGenres {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
