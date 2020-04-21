import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import SEO from '.';

const mockProps = {
  title: 'title',
};

describe('Atoms/SEO', () => {
  it('should render as expected', () => {
    const wrapper = mount(
      <BrowserRouter>
        <SEO {...mockProps} />
      </BrowserRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
