import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

class SEO extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const title =
      "Movie Search" +
      (this.context.router.history.location.pathname !== "/"
        ? ` - ${this.props.title}`
        : "");
    return <Helmet title={title} />;
  }
}

export default SEO;
