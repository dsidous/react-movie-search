import React from 'react';
import { shallow } from 'enzyme';
import PersonKnownFor from '.';

const mockProps = {
  combinedCredits: {
    cast: [
      {
        id: 1,
        name: 'name',
        media_type: 'tv',
        poster_path: 'path/to/image',
        vote_count: 1,
      },
      {
        id: 1,
        name: 'name',
        media_type: 'tv',
        poster_path: 'path/to/image',
        vote_count: 3,
      },
    ],
  },
};

describe('Molecules/PersonKnownFor', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<PersonKnownFor {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
