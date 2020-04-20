import React from 'react';
import { shallow } from 'enzyme';
import FullCastCrew from '.';

const mockProps = {
  movie: {
    credits: {
      crew: [
        {
          credit_id: 1,
          profile_path: 'path/to/image',
          name: 'name',
          job: 'job',
        },
      ],
      cast: [
        {
          credit_id: 1,
        },
      ],
    },
  },
};

describe('Molecules/FullCastCrew', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<FullCastCrew {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
