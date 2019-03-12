import React from 'react';
import { shallow } from 'enzyme';
import Person from '.';

const mockProps = {
  person: {
    id: 1,
  },
  loading: false,
};

describe('Templates/Person', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Person {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading expected', () => {
    const wrapper = shallow(<Person {...mockProps} loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
