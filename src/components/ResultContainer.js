import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Row, Col, Well } from 'react-bootstrap';

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
          <Col sm={8} smOffset={2}>
            <ul className="list-inline">
              {this.props.movies && this.props.movies.map(movie => (
              <li key={movie.id} className="col-sm-6 movies-list__element">
                <Well>
                  <Row>
                    <Col sm={4}>
                      <img src={this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[2] + movie.poster_path}
                           className="movies-poster"
                           alt={movie.original_title}
                           onClick={() => this.goToMovie(movie.id)}
                      />
                    </Col>
                    <Col sm={8}>
                      <div className="clearfix">
                        <div className="movies-title">{movie.original_title}</div>
                        <div className="movies-rating">{movie.vote_average}</div>
                      </div>
                      <div className="clearfix">
                        <div className="movies-year">{movie.release_date.slice(0,4)}</div>
                        <div className="movies-genres">
                            { movie.genre_ids.map( (genreId, i) => (
                              this.props.config.genres
                                .filter(genre => genre.id === genreId)
                                .map(g => {
                                  return (movie.genre_ids.length === i + 1) ? g.name :  g.name + ', '
                                })
                              )
                            )}
                        </div>
                      </div>
                      <div className="movies-overview">{movie.overview}</div>
                    </Col>
                  </Row>
                </Well>
              </li>
              ))}
            </ul>

          </Col>

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
