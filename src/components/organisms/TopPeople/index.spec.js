import React from 'react';
import { shallow } from 'enzyme';
import TopPeopleProfile from '.';

const mockProps = {
  toppeople: [
    {
      id: 1,
      name: 'name',
      profile_path: 'path/to/image',
    },
  ],
  page: 1,
  handlePageSelect: jest.fn(),
};

describe('Organisms/TopPeopleProfile', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<TopPeopleProfile {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
