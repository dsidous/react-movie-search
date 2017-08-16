import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import * as actions from '../actions'

import CastProfile from '../components/CastProfile'

class CastProfielContainer extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
    person: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidUpdate = () => {
    ReactDom.findDOMNode(this).scrollIntoView();
  }

  handlePersonMovieClick = (movieId) => {
    this.props.dispatch({type:'RESET_MOVIE_STATE'});
    this.props.dispatch(actions.updateMovie(movieId));
    this.context.router.push(`/movie/${movieId}`);
  }

  render(){
    return (
      <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={1500}
          transitionLeave={false}>
        { this.props.config.images &&
          <CastProfile
            key={this.props.person.id}
            config={this.props.config}
            person={this.props.person}
            person_movies={this.props.person_movies}
            handlePersonMovieClick={this.handlePersonMovieClick}
          />
        }
      </ReactCSSTransitionGroup>
    )
  }
}

const mapStateToProps = state => {
  return {
    config: state.config.config,
    person: state.person.person,
    person_movies: state.person.person_movies
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(CastProfielContainer);
