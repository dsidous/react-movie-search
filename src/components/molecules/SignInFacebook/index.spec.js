import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { auth } from '../../../firebase';
import SignInFacebook from '.';

const mockProps = {
  history: [],
};

describe('Molecules/SignInFacebook', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<SignInFacebook {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle signin button click', () => {
    jest.mock('../../../firebase');
    const wrapper = mount(<BrowserRouter><SignInFacebook {...mockProps} /></BrowserRouter>);
    const user = { name: 'test' };
    const resp = { data: user };
    auth.doSignInWithFacebook = (() => Promise.resolve(resp));

    wrapper.find(Button).simulate('click');
    //.then(response => expect(response.data).toEqual(user));
  });
});
