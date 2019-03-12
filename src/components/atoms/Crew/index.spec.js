import React from 'react';
import { shallow } from 'enzyme';
import Crew from '.';

const defaultProps = {
  crew: [
    {
      name: 'test',
      job: 'job',
    },
    {
      name: 'test',
      job: 'job',
    },
  ],
};

describe('Atoms/Crew', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Crew {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
