import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Result from '../components/Result'

class ResultContainer extends Component {
  constructor(props){
    super(props);
    this.goToMovie = this.goToMovie.bind(this);
  }

  goToMovie(movieId){
    this.context.router.push(`/movie/${movieId}`);
  }

  render(){

    return(
      <div className="result-wrapper">
        {this.props.movies &&
          <Result
            {...this.props}
            goToMovie={this.goToMovie}
          />
        }
      </div>
    )
  }
}

ResultContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    config: state.config,
    movies: state.movies.movies.results
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultContainer);
