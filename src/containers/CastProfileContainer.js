import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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
    this.props.dispatch(actions.updateMovie(movieId));
    this.context.router.push(`/movie/${movieId}`);
  }

  render(){
    return (
      <div>
        { this.props.config.images &&
          <CastProfile
            config={this.props.config}
            person={this.props.person}
            person_movies={this.props.person_movies}
            handlePersonMovieClick={this.handlePersonMovieClick}
          />
        }
      </div>
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
