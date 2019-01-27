import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '.';

const mockProps = {
  title: 'title',
  release_date: '01.01.2010',
  poster_path: 'path/to/image',
  link: 'url',
  linkCopy: 'lnkCopy',
};

describe('Molecules/MovieCard', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<MovieCard {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
