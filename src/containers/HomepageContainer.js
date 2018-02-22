import React, { Component } from "react";
import SEO from "../components/SEO";
import TopListsContainer from "./TopListsContainer";

class HomepageContainer extends Component {
  render() {
    return (
      <div>
        <SEO title="" />
        <TopListsContainer />
      </div>
    );
  }
}

export default HomepageContainer;
