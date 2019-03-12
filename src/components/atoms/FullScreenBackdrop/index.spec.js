import React from 'react';
import { shallow } from 'enzyme';

import FullScreenBackdrop from '.';

const mockProps = {
  backdrops: [
    {
      backdrop: 'path/to/image',
    },
  ],
};

describe('Atoms/FullScreenBackdrop', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<FullScreenBackdrop {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
