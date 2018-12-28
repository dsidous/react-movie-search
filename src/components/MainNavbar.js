import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Navbar, NavItem, Glyphicon, Dropdown, MenuItem, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

// import SignOutButton from "./auth/SignOut";
import noimage from "../images/noimage.jpg";

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  static propTypes = {
    config: PropTypes.object.isRequired
  };

  handleSearch = query => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=cfe422613b250f702980a3bbf9e90716&query=${query}`
      )
        .then(resp => resp.json())
        .then(json =>
          this.setState({
            options: json.results.filter(res => res.media_type !== "tv")
          })
        );
    }
  };

  renderMenuItemChildren = (option, props, index) => {
    let title, image;

    if (option.media_type === "movie") {
      title = [option.title, option.release_date.slice(0, 4), "in movies"]
        .join(" ");
      image = option.poster_path
        ? [
          this.props.config.images.base_url,
          this.props.config.images.poster_sizes[0],
          option.poster_path
        ].join("")
        : noimage;
    } else if (option.media_type === "person") {
      title = option.name + " in persons";
      image = option.profile_path
        ? [
          this.props.config.images.base_url,
          this.props.config.images.profile_sizes[0],
          option.profile_path
        ].join("")
        : noimage;
    }

    return (
      <div key={option.id}>
        <span>
          <img src={image} className="movie-search-img-thumb" alt="#" />
        </span>
        <span>{title}</span>
      </div>
    );
  };

  handleChange = selected => {
    if (typeof selected[0] !== "undefined") {
      this.context.router.history.push(`/${selected[0].media_type}/${selected[0].id}`);
    }
  };

  handleNavSelect = selectedKey => {
    if (typeof selectedKey !== "undefined") {
      this.context.router.history.push(`/${selectedKey}`);
    }
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}>Movie Search</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            <Link to={"/movies"}>MOVIES</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to={"/person"}>PEOPLE</Link>
          </Navbar.Text>
          {/* <Navbar.Text>
            <Link to={"/watchlist"}>
              WATCHLIST <span className="fa fa-bookmark"></span>
            </Link>
          </Navbar.Text> */}
          <Navbar.Form pullLeft>
            <AsyncTypeahead
              {...this.state}
              isLoading={true}
              align="justify"
              labelKey={option => {
                if (option.title) {
                  return option.title;
                } else {
                  return option.name;
                }
              }}
              onChange={this.handleChange}
              onSearch={this.handleSearch}
              placeholder="Search for a movie or a person..."
              renderMenuItemChildren={this.renderMenuItemChildren}
            />
          </Navbar.Form>
          {/* {!this.props.authUser && 
          <Nav pullRight id="nav-user" onSelect={this.handleNavSelect}> 
            <NavItem eventKey={'signin'} href="#">
              Login
            </NavItem>
            <NavItem eventKey={'signup'} href="#">
              Sign up
            </NavItem>
          </Nav>
          }
          {this.props.authUser && (          
            <Dropdown id="user-dd">
              <Dropdown.Toggle noCaret>
                <Glyphicon glyph="user" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dd__menu">
                <MenuItem header disabled>                  
                  {this.props.user ? this.props.user.username : null}                  
                </MenuItem>
                <MenuItem eventKey="1" href="#" disabled>
                  view profile
                </MenuItem>    
                <MenuItem divider />    
                <LinkContainer to="/watchlist">
                  <MenuItem eventkey="2">
                    Watchlist
                  </MenuItem>    
                </LinkContainer>
                <MenuItem divider />    
                <MenuItem eventkey="3">
                  <SignOutButton />
                </MenuItem>    
              </Dropdown.Menu>
            </Dropdown>          
          )} */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

MainNavbar.contextTypes = {
  router: PropTypes.object.isRequired
};

export default MainNavbar;
