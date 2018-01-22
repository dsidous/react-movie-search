import React, { Component } from "react";
import Search from "../components/Search";
import FilterContainer from "./FilterContainer";
import SEO from "../components/SEO";

class DiscoverContainer extends Component {
  render() {
    return (
      <div className="discover-wrapper">
        <SEO title="discover" />
        <Search />
        <FilterContainer />
      </div>
    );
  }
}

export default DiscoverContainer;
