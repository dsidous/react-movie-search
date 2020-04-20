import React from 'react';
import { shallow } from 'enzyme';

import SignOutButton from '.';
import * as firebase from '../../../firebase/firebase';

describe('Atoms/SignOutButton', () => {
  beforeAll(() => {
    firebase.auth = jest.fn().mockReturnValue({
      currentUser: true,
      doSignOut: jest.fn(),
    });
  });

  it('should render as expected', () => {
    const wrapper = shallow(<SignOutButton />);

    expect(wrapper).toMatchSnapshot();
  });
});
