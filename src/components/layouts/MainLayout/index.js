import React, { Component } from 'react';

import { propTypes } from './propTypes';
import MainNavbar from '../../pages/MainNavbar';

class MainLayout extends Component {
  static propTypes = propTypes;

  render() {
    const { children } = this.props;
    return (
      <div>
        <MainNavbar />
        {children}
      </div>
    );
  }
}

export default MainLayout;
