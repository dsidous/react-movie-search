import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

import SignInFacebook from '.';

const mockProps = {
  history: [],
};

jest.mock('../../../firebase/auth', () => ({
  doSignInWithFacebook: () => new Promise(() => ({
    data: { user: { name: 'test' } },
  })),
}));

// jest.mock('../../../firebase/auth', () => ({
//   auth: jest.fn(() => ({
//     doSignInWithFacebook: () => ({
//       data: { user: { name: 'test' } },
//     }),
//   })),
// }));

describe('Molecules/SignInFacebook', () => {
  it('should render as expected', () => {
    const wrapper = shallow(
      <SignInFacebook.WrappedComponent {...mockProps} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle signin button click', () => {
    const wrapper = mount(<SignInFacebook.WrappedComponent {...mockProps} />);
    wrapper.find(Button).simulate('click');
    expect(wrapper.props().history).toEqual([]);
  });
});
