import React, { Component } from "react";
import MainNavbar from "../pages/MainNavbar";

class MainLayout extends Component {

  render() {
    return (
      <div>
        <MainNavbar />
        {this.props.children}
      </div>
    );
  }
}
export default MainLayout;
