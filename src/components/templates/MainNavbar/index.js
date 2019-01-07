import React, { Component } from "react";
import { withRouter } from 'react-router';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Navbar, NavItem, Glyphicon, Dropdown, MenuItem, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

import { FirebaseAuthContext } from '../../../firebase/FirebaseAuthProvider';
import SignOutButton from "../../atoms/SignOut";
import noimage from "../../../images/noimage.jpg";

class MainNavbar extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };


  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      options: []
    };
  }

  handleSearch = query => {
    if (query) {
      this.setState({ isLoading: true });
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=cfe422613b250f702980a3bbf9e90716&query=${query}`
      )
        .then(resp => resp.json())
        .then(json =>
          this.setState({
            options: json.results,
            isLoading: false
          })
        );
    }
  };

  renderMenuItemChildren = (option) => {
    const { id, title, name, first_air_date, release_date, poster_path, profile_path } = option;
    const { secure_base_url, poster_sizes, profile_sizes } = this.props.config.images;

    const listTitle = [
      title ? title : name,
      release_date
        ? [release_date.slice(0, 4), "in movies"].join(" ")
        : first_air_date 
          ? [first_air_date.slice(0, 4), "in tvs"].join(" ")
          : " in persons"
    ].join(" ");

    const listImage = (poster_path || profile_path)
      ? [
        secure_base_url,
        poster_path
          ? [poster_sizes[0], poster_path].join('')
          : [profile_sizes[0], profile_path].join('')
      ].join("")
      : noimage;

    return (
      <div key={id}>
        <span>
          <img src={listImage} className="movie-search-img-thumb" alt="#" />
        </span>
        <span>{listTitle}</span>
      </div>
    );
  };

  handleChange = selected => {
    const { history } = this.props;
    if (typeof selected[0] !== "undefined") {
      history.push(`/${selected[0].media_type}/${selected[0].id}`);
    }
  };

  handleNavSelect = selectedKey => {
    const { history } = this.props;
    if (typeof selectedKey !== "undefined") {
      history.push(`/${selectedKey}`);
    }
  }

  render() {
    const { authUser, user } = this.context;
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
            <Link to={"/tvs"}>TVS</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to={"/person"}>PEOPLE</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to={"/watchlist"}>
              WATCHLIST <span className="fa fa-bookmark"></span>
            </Link>
          </Navbar.Text>
          <Navbar.Form pullLeft>
            <AsyncTypeahead
              {...this.state}
              align="justify"
              labelKey={option => {
                if (option.title) {
                  return option.title;
                }
                return option.name;
              }}
              onChange={this.handleChange}
              onSearch={this.handleSearch}
              placeholder="Search for a movie or a person..."
              renderMenuItemChildren={this.renderMenuItemChildren}
            />
          </Navbar.Form>
          {!authUser &&
            <Nav pullRight id="nav-user" onSelect={this.handleNavSelect}>
              <NavItem eventKey={'login'} href="#">
                Login
            </NavItem>
              <NavItem eventKey={'signup'} href="#">
                Sign up
            </NavItem>
            </Nav>
          }
          {authUser && (
            <Dropdown id="user-dd">
              <Dropdown.Toggle noCaret>
                <Glyphicon glyph="user" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dd__menu">
                <MenuItem header disabled>
                  {user ? user.username : null}
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
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(MainNavbar);

MainNavbar.contextType = FirebaseAuthContext;
