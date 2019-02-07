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
    //jest.mock('../../../firebase', () => new Promise(resolve => resolve(true)));
    const wrapper = mount(<BrowserRouter><SignInFacebook {...mockProps} /></BrowserRouter>);
    // const user = { name: 'test' };
    // const resp = { data: user };
    // auth.doSignInWithFacebook = (() => Promise.resolve(resp));
    // auth = jest.fn().mockReturnValue({
    //   currentUser: true,
    //   doSignInWithFacebook: () => resp,
    // });

    // const result = wrapper.dive().instance().signInWithFB();

    // expect(result).toBe('');
    wrapper.find(Button).simulate('click');

    expect(firebase.auth.FacebookAuthProvider()).toHaveBeenCalled();
    //.then(response => expect(response.data).toEqual(user));
  });
});
