import React, { Component} from 'react'
import { connect } from 'react-redux'

import { Panel, Row, Col } from 'react-bootstrap';

class ResultContainer extends Component {
  render(){
    return(
      <div>

          <Col sm={8} smOffset={2}>
            <ul className="list-inline">
              {this.props.movies && this.props.movies.map(movie => (
              <li className="col-sm-6 movies-list__element">
                <Panel>
                  <Row>
                    <Col sm={4}>
                      <img src={this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[2] + movie.poster_path} className="movies-poster"/>
                    </Col>
                    <Col sm={8}>
                      <div><h3>{movie.original_title}</h3></div>
                      <div>{movie.vote_average}</div>
                      <div>{movie.release_date.slice(0,4)}</div>
                      <div>{movie.overview}</div>
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
