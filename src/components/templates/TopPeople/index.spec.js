import React from 'react';
import { shallow } from 'enzyme';

import TopPeopleProfile from '../../organisms/TopPeople';
import TopPeople from '.';

const mockProps = {
  toppeople: [{
    id: 1,
    name: 'name',
    profile_path: 'path/to/image',
    popularity: 2,
  }],
  location: {
    search: {
      page: 1,
    },
  },
  loading: false,
};

const context = { router: { history: ['/person'] } };

describe('Templates/TopPeople', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<TopPeople {...mockProps} />, { context });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading', () => {
    const wrapper = shallow(<TopPeople {...mockProps} loading />, { context });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle page select', () => {
    const wrapper = shallow(<TopPeople {...mockProps} />, { context });
    wrapper.find(TopPeopleProfile).props().handlePageSelect(2);

    expect(wrapper.state().page).toEqual(2);
  });
});
