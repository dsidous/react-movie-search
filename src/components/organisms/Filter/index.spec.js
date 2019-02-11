import React from 'react';
import { shallow } from 'enzyme';

import Filter from '.';

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
  it('should render as expected', () => {
    const wrapper = shallow(<Filter {...mockProps}><div /></Filter>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle genre select', () => {
    const wrapper = shallow(<Filter {...mockProps}><div /></Filter>);
    wrapper.instance().handleGenresChange('2');

    expect(wrapper.state().with_genres).toEqual('2');
  });

  it('should handle page select', () => {
    const wrapper = shallow(<Filter {...mockProps}><div /></Filter>);
    wrapper.instance().handlePageSelect(2);

    expect(wrapper.state().page).toEqual(2);
  });

  it('should handle "sort_by" select', () => {
    const selected = { target: { value: 'vote_average.desc', id: 'sort_by' } };
    const wrapper = shallow(<Filter {...mockProps}><div /></Filter>);

    wrapper.find('#sort_by').simulate('change', selected);

    expect(wrapper.state().sort_by).toBe(selected.target.value);
  });

  it('should handle "average vote" select', () => {
    const selected = { target: { value: '4', id: 'vote_average.gte' } };
    const wrapper = shallow(<Filter {...mockProps}><div /></Filter>);

    wrapper.find('FormControl[id="vote_average.gte"]').simulate('change', selected);

    expect(wrapper.state()['vote_average.gte']).toBe(selected.target.value);
  });
});
