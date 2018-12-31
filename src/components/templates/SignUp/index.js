import React from "react";

import SignInFacebook from '../../molecules/SignInFacebook';
import SignUpForm from '../../molecules/SignUpForm';

const SignUpPage = () => (
  <div className="form-signin">
    <SignInFacebook />
    <SignUpForm />
  </div>
);

export default SignUpPage;
