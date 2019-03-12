import React from 'react';
import { shallow } from 'enzyme';

import MediaImage from '.';

const mockProps = {
  config: {
    images: {
      secure_base_url: 'path/to/image',
      profile_sizes: ['1', '2', '3', '4'],
    },
  },
  filePath: 'path/to/image',
  name: 'name',
  size: 2,
  mediaType: 'profile',
  configLoading: true,
};

describe('Atoms/MediaImage', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<MediaImage {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with no filePath', () => {
    const wrapper = shallow(<MediaImage {...mockProps} filePath={null} />);

    expect(wrapper).toMatchSnapshot();
  });
});
