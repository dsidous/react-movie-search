import React from 'react';
import { shallow } from 'enzyme';

import WatchlistBookmark from '.';

jest.mock('firebase/app', () => ({
  apps: [{}],
  auth: jest.fn(function () {
    return {
      FacebookAuthProvider: jest.fn(),
    }
  }),
  database: jest.fn(),
}));

describe('Atoms/WatchlistBookmark', () => {
  // beforeAll(() => {
  //   firebase.firebase.auth = jest.fn().mockReturnValue({
  //     currentUser: true,
  //     signOut: () => true,
  //   });
  // });

  it('should render as expected', () => {
    const wrapper = shallow(<WatchlistBookmark />);

    expect(wrapper).toMatchSnapshot();
  });
});
