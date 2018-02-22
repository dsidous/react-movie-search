import React, { Component } from "react";
import FilterContainer from "./FilterContainer";
import SEO from "../components/SEO";

class DiscoverContainer extends Component {
  render() {
    return (
      <div className="discover-wrapper">
        <SEO title="discover" />
        <FilterContainer />
      </div>
    );
  }
}

export default DiscoverContainer;
