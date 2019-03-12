import React from 'react';
import { shallow } from 'enzyme';
import MiniHeader from '.';

const mockProps = {
  title: 'title',
  release_date: '01.01.2010',
  poster_path: 'path/to/image',
  link: 'url',
  linkCopy: 'lnkCopy',
};

describe('Molecules/MiniHeader', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<MiniHeader {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
