import React from 'react';

import { propTypes } from './propTypes';
import MainNavbar from '../../pages/MainNavbar';

const MainLayout = ({ children }) => (
  <div>
    <MainNavbar />
    {children}
  </div>
);

MainLayout.propTypes = propTypes;

export default MainLayout;
