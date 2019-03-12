import React from 'react';
import { shallow } from 'enzyme';
import PersonProfile from '.';

const mockProps = {
  person: {
    biography: 'bio',
    birthday: '01.01.2000',
    deathday: '02.02.2010',
    name: 'name',
    place_of_birth: 'city',
    profile_path: 'path/to/image',
    combined_credits: {},
    id: 1,
  },
};

describe('Organisms/PersonProfile', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<PersonProfile {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
