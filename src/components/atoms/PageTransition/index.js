import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class PageTransition extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnterTimeout={1500}
        transitionLeave={false}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
};

export default PageTransition;
