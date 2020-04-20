import React from 'react';
import { Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import TopPeople from '.';
import TopPeopleProfile from '../../organisms/TopPeople';
import Spinner from '../../atoms/Spinner';

const mockProps = {
  toppeople: [
    {
      id: 1,
      name: 'name',
      profile_path: 'path/to/image',
      popularity: 2,
    },
  ],
  loading: false,
};

const historyMock = {
  push: jest.fn(),
  location: {},
  listen: jest.fn(),
  createHref: jest.fn(),
};

describe('Templates/TopPeople', () => {
  it('should render as expected', () => {
    const wrapper = shallow(
      <Router history={historyMock}>
        <TopPeople {...mockProps} />{' '}
      </Router>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading', () => {
    const wrapper = mount(
      <Router history={historyMock}>
        <TopPeople {...mockProps} loading />
      </Router>,
    );

    expect(wrapper.find(Spinner).length).toEqual(1);
  });

  it('should handle page select', () => {
    const wrapper = mount(
      <Router history={historyMock}>
        <TopPeople {...mockProps} />{' '}
      </Router>,
    );
    wrapper.find(TopPeopleProfile).props().handlePageSelect(2);

    expect(historyMock.push).toHavebeenCalledWith(2);
  });
});
