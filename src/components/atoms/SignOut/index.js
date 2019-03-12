import React from 'react';

import { auth } from '../../../firebase';

const SignOutButton = () => (
  <div
    className="sign-out"
    type="button"
    onClick={auth.doSignOut}
    onKeyDown={auth.doSignOut}
    role="button"
    tabIndex="0"
  >
    Sign Out
  </div>
);

export default SignOutButton;
