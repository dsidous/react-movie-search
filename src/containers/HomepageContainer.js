import React, { Component } from "react";
import Search from "../components/Search";
import SEO from "../components/SEO";
import TopListsContainer from "./TopListsContainer";

class HomepageContainer extends Component {
  render() {
    return (
      <div>
        <SEO title="" />
        <Search />
        <TopListsContainer />
      </div>
    );
  }
}

export default HomepageContainer;
