import React from "react";

import SignInFacebook from '../../molecules/SignInFacebook';
import SignInForm from '../../molecules/SignInForm';

const SignInPage = () => (
  <div className="form-signin">
    <SignInFacebook />
    <SignInForm />
  </div>
)

export default SignInPage;