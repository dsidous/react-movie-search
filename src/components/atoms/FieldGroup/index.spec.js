import React from 'react';
import { shallow } from 'enzyme';
import FieldGroup from '.';

describe('Atoms/FieldGroup', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<FieldGroup />);

    expect(wrapper).toMatchSnapshot();
  });
});
