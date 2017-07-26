import React from 'react'
import { Row, Col, Well } from 'react-bootstrap'
import '../styles/movies.css'

const Result = (props) => {

  let img_base_path = props.config.config.images.base_url + props.config.config.images.poster_sizes[2];

  return (
    <Col sm={8} smOffset={2}>
      <ul className="list-inline">
        {props.movies.map(movie => (
          <li key={movie.id} className="col-sm-6 movies-list__element">
            <Well>
              <Row>

                <Col sm={4}>
                  <img className="movies-poster"
                      src={img_base_path + movie.poster_path}
                      alt={movie.original_title}
                      onClick={() => props.goToMovie(movie.id)}
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
                          props.config.genres
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
          ))
        }
      </ul>

    </Col>
  )
}

export default Result;
