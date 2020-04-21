import React from 'react';
import { shallow } from 'enzyme';

import PageTransition from '.';

describe('Atoms/PageTransition', () => {
  it('should render as expected', () => {
    const wrapper = shallow(
      <PageTransition>
        <div />
      </PageTransition>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
