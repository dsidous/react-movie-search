import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <div className="sign-out"
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </div>

export default SignOutButton;