import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { propTypes } from './propTypes';

class PageTransition extends Component {
  static options = {
    transitionName: 'fade',
    transitionAppear: true,
    transitionAppearTimeout: 1500,
    transitionEnterTimeout: 1500,
    transitionLeave: false,
  };

  render() {
    const { children } = this.props;

    return (
      <ReactCSSTransitionGroup {...PageTransition.options}>
        {children}
      </ReactCSSTransitionGroup>
    );
  }
}

PageTransition.propTypes = propTypes;

export default PageTransition;
