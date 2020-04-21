import React from 'react';
import { shallow } from 'enzyme';
import TopCast from '.';

const mockProps = {
  cast: [
    {
      name: 'test',
      id: 1,
      character: 'test',
      profile_path: 'path/to/image',
    },
    {
      name: 'test',
      id: 1,
      character: 'test',
      profile_path: 'path/to/image',
    },
  ],
  handleFullCrewClick: jest.fn(),
};

describe('Molecules/TopCast', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<TopCast {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
