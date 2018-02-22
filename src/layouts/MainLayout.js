import React, { Component } from "react";
import Search from "../components/Search";

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Search />
        {this.props.children}
      </div>
    );
  }
}
export default MainLayout;
