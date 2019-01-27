import React from 'react';
import { shallow } from 'enzyme';

import WatchlistBookmark from '.';
import * as firebase from '../../../firebase/firebase';

describe('Atoms/WatchlistBookmark', () => {

  beforeAll(() => {
    firebase.firebase.auth = jest.fn().mockReturnValue({
      currentUser: true,
      signOut: () => true,
    });
  });

  it('should render as expected', () => {
    const wrapper = shallow(<WatchlistBookmark />);

    expect(wrapper).toMatchSnapshot();
  });
});
