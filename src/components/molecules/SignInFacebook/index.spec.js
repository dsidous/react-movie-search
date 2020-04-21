import React from 'react';
import { Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react-hooks';
import Button from '@material-ui/core/Button';

import SignInFacebook from '.';

jest.mock('../../../firebase/auth', () => ({
  doSignInWithFacebook: () =>
    Promise.resolve(() => ({
      data: { user: { name: 'test' } },
    })),
}));

const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

describe('Molecules/SignInFacebook', () => {
  it('should render as expected', () => {
    const wrapper = shallow(
      <Router history={historyMock}>
        <SignInFacebook />
      </Router>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle signin button click', async () => {
    const wrapper = mount(
      <Router history={historyMock}>
        <SignInFacebook />
      </Router>,
    );
    const btn = wrapper.find(Button);
    await act(async () => {
      btn.props().onClick();
    });

    expect(historyMock.push.mock.calls[0][0]).toEqual('/');
  });
});
