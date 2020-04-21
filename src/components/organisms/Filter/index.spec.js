import React, { useState as useStateMock } from 'react';
import { shallow } from 'enzyme';

import Filter from '.';
import FilterGenres from '../../atoms/FilterGenres';
import MyPager from '../../atoms/Pager';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const mockProps = {
  query: '',
  media: 'movies',
  queryUpdate: jest.fn(),
  genres: [
    { name: 'genre-1', id: '1' },
    { name: 'genre-2', id: '2' },
    { name: 'genre-3', id: '3' },
  ],
};

describe('Organisms/Filter', () => {
  let wrapper;
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState]);
    wrapper = shallow(
      <Filter {...mockProps}>
        <div />
      </Filter>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle genre select', () => {
    wrapper.find(FilterGenres).props().onChange('2');

    expect(setState).toHaveBeenCalledWith(
      expect.objectContaining({
        with_genres: '2',
      }),
    );
  });

  it('should handle page select', () => {
    wrapper.find(MyPager).first().props().handlePageSelect(2);

    expect(setState).toHaveBeenCalledWith(
      expect.objectContaining({
        page: 2,
      }),
    );
  });

  it('should handle "sort_by" select', () => {
    const selected = {
      target: { value: 'vote_average.desc', name: 'sort_by' },
    };

    wrapper.find('#shortby').props().onChange(selected);

    expect(setState).toHaveBeenCalledWith(
      expect.objectContaining({
        sort_by: selected.target.value,
      }),
    );
  });

  it('should handle "average vote" select', () => {
    const selected = { target: { value: '4', name: 'vote_average.gte' } };

    wrapper.find('[name="vote_average.gte"]').props().onChange(selected);

    expect(setState).toHaveBeenCalledWith(
      expect.objectContaining({
        'vote_average.gte': selected.target.value,
      }),
    );
  });
});
