import React from 'react';
import { shallow } from 'enzyme';
import PersonImages from '.';

const mockProps = {
  person: {
    images: [
      {
        file_path: 'path/to/image',
        vote_average: 1,
        height: 1,
        width: 1,
      },
      {
        file_path: 'path/to/image',
        vote_average: 2,
        height: 1,
        width: 1,
      },
    ],
    name: 'name',
    id: 1,
    birthday: '10.10.2010',
    profile_path: 'path/to/image',
  },
  config: {
    images: {
      secure_base_url: 'path/to/image',
      profile_sizes: ['1', '2', '3', '4'],
    },
  },
  loading: false,
};

describe('Templates/PersonImages', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<PersonImages {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading expected', () => {
    const wrapper = shallow(<PersonImages {...mockProps} loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
