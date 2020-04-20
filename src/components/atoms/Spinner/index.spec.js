import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '.';

describe('Atoms/Spinner', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper).toMatchSnapshot();
  });
});
