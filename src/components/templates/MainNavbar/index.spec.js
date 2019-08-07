import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import MainNavbar from '.';

const mockProps = {
  config: {
    images: {
      secure_base_url: 'path/to/image',
      profile_sizes: ['1', '2', '3', '4'],
      poster_sizes: ['1', '2', '3', '4'],
      backdrop_sizes: ['1', '2', '3', '4'],
    },
  },
  history: new BrowserRouter().history,
};

describe('Templates/MainNavbar', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<MainNavbar.WrappedComponent {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle search options', () => {
    const wrapper = shallow(<MainNavbar.WrappedComponent {...mockProps} />);
    jest.spyOn(wrapper.instance(), 'handleSearch')
      .mockImplementation(() => ({
        options: [
          {
            id: 1,
            title: 'title',
            release_date: '01.01.2010',
            poster_path: 'path/to/image',
          },
        ],
        isLoading: false,
      }));

    wrapper.instance().handleSearch('test');

    expect(wrapper.instance().handleSearch).toHaveBeenCalled();
  });

  it('should handle select options', () => {
    const wrapper = mount(<BrowserRouter><MainNavbar {...mockProps} /></BrowserRouter>);

    wrapper.find(AsyncTypeahead).simulate('change', [{ media_type: 'movie', id: '1' }]);
    expect(wrapper.props().children.props.history.location.pathname).toEqual('/');
  });
});
