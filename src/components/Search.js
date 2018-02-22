import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";

import SignOutButton from './auth/SignOut';
import * as actions from "../actions";
import noimage from '../images/noimage.jpg';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: []
    };
  }

  static propTypes = {
    config: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.dispatch(actions.getConfig());
    this.props.dispatch(actions.getGenres());
  }

  handleSearch = query => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=cfe422613b250f702980a3bbf9e90716&query=${query}`
      )
        .then(resp => resp.json())
        .then(json => this.setState({ options: json.results.filter(res => res.media_type!=='tv') }));
    }
  };

  renderMenuItemChildren = (option, props, index) => {
    let title, image;

    if (option.media_type === 'movie') {
      title = [option.title,option.release_date.slice(0, 4),'in movies'].join(' ');
      image = option.poster_path 
        ? [this.props.config.config.images.base_url,
          this.props.config.config.images.poster_sizes[0],
          option.poster_path].join('')
        : noimage;
      } else if (option.media_type === 'person'){
        title = option.name +' in persons';
        image = option.profile_path 
          ? [this.props.config.config.images.base_url,
            this.props.config.config.images.profile_sizes[0],
            option.profile_path].join('')
          : noimage;
      }

      return (
        <div key={option.id}>
        <span>
          <img
            src={image}
            className="movie-search-img-thumb"
            alt="#"
          />
        </span>
        <span>{title}</span>
      </div>            
    );
  };

  handleChange = selected => {
    if (typeof selected[0] !== "undefined") {
      if (selected[0].media_type === 'movie') {
        this.props.dispatch(actions.updateMovie(selected[0].id));
        this.context.router.history.push(`/movie/${selected[0].id}`);
      } else if (selected[0].media_type === 'person') {
        this.props.dispatch(actions.updatePerson(selected[0].id));
        this.context.router.history.push(`/person/${selected[0].id}`);
      } 
    } 
  };

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
          <Navbar.Form pullLeft>
            <AsyncTypeahead
              {...this.state}
              isLoading={true}
              align="justify"
              labelKey={option => {
                if (option.title) {
                  return option.title
                } else {
                  return option.name
                }
              }}
              onChange={this.handleChange}
              onSearch={this.handleSearch}
              placeholder="Search for a movie or a person..."
              renderMenuItemChildren={this.renderMenuItemChildren}
            />
          </Navbar.Form>
          {this.props.authUser &&
            <Navbar.Text>
              <SignOutButton />
              {this.props.authUser.email}
            </Navbar.Text>
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Search.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    config: state.config,
    authUser: state.session.authUser
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
