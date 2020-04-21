import React from 'react';
import { Router, useHistory as useHistoryMock } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import TopPeople from '.';
import TopPeopleProfile from '../../organisms/TopPeople';
import Spinner from '../../atoms/Spinner';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path',
  }),
  useHistory: jest.fn(),
}));

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
  location: { search: 'page=1' },
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
    const setHistory = jest.fn();

    useHistoryMock.mockImplementation(() => ({
      push: setHistory,
    }));

    const wrapper = shallow(
      <Router history={historyMock}>
        <TopPeople {...mockProps} />
      </Router>,
    );

    wrapper
      .find(TopPeople)
      .dive()
      .find(TopPeopleProfile)
      .props()
      .handlePageSelect(2);

    expect(setHistory.mock.calls[0][0]).toEqual('/person?page=2');
  });
});
