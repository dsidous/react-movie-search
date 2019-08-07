import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { SignInFacebook } from '.';

const mockProps = {
  history: new BrowserRouter().history,
};

jest.mock('../../../firebase/auth', () => ({
  doSignInWithFacebook: () => Promise.resolve(() => ({
    data: { user: { name: 'test' } },
  })),
}));

describe('Molecules/SignInFacebook', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<SignInFacebook {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle signin button click', async () => {
    mockProps.history.location.pathname = 'test';

    const wrapper = mount(<SignInFacebook {...mockProps} />);
    await wrapper.find(Button).simulate('click');

    expect(wrapper.props().history.location.pathname).toEqual('/');
  });
});
