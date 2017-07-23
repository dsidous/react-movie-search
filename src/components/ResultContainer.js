import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { Panel, Row, Col } from 'react-bootstrap';

class ResultContainer extends Component {
  constructor(props){
    super(props);
    this.goToMovie = this.goToMovie.bind(this);
  }

  goToMovie(movieId){
    this.props.dispatch(actions.getMovie(movieId));
    this.props.dispatch(actions.getCrew(movieId));
    this.props.dispatch(actions.getSimilarMovie(movieId));
    this.props.dispatch(actions.getVideos(movieId));
    this.context.router.push('/')
  }

  render(){
    return(
      <div>
          <Col sm={8} smOffset={2}>
            <ul className="list-inline">
              {this.props.movies && this.props.movies.map(movie => (
              <li key={movie.id} className="col-sm-6 movies-list__element">
                <Panel>
                  <Row>
                    <Col sm={4}>
                      <img src={this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[2] + movie.poster_path}
                           className="movies-poster"
                           alt={movie.original_title}
                           onClick={() => this.goToMovie(movie.id)}
                      />
                    </Col>
                    <Col sm={8}>
                      <div><h3>{movie.original_title}</h3></div>
                      <div>{movie.vote_average}</div>
                      <div>{movie.release_date.slice(0,4)}</div>
                      <div className="movies-overview">{movie.overview}</div>
                    </Col>
                  </Row>
                </Panel>
              </li>
              ))}
            </ul>

          </Col>

      </div>
    )
  }
}

ResultContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
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
