import React, { Component } from "react";
import PropTypes from "prop-types";

class FullCastCrew extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  handlePersonClick = personId => {
    this.context.router.history.push(`/person/${personId}`);
  };

  render() {
    if (this.props.loading || this.props.configLoading) {
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
    const { base_url } = this.props.config.images;
    const profile_img_base_url = base_url + "w132_and_h132_face/";
    return (
      <div>
        <div className="full-ca-cr__header">
          <h2>{this.props.movie.title}
            <span> ({this.props.movie.release_date.slice(0, 4)})</span>
          </h2>
        </div>
        <div className="full-ca-cr">
          <div className="full-ca-cr__col">
            <h3>
              Cast
            <span> {this.props.movie.credits.cast.length} </span>
            </h3>
            {this.props.movie.credits.cast.map((cast, i) => (
              <div
                key={i}
                className="full-ca-cr__element"
                onClick={() => this.handlePersonClick(cast.id)}
              >
                {cast.profile_path !== null ? (
                  <img
                    className="full-ca-cr__image"
                    alt={cast.name}
                    src={profile_img_base_url + cast.profile_path}
                  />
                ) : (
                    <div className="no_image_holder w50_and_h50 profile" />
                  )}
                <div className="full-ca-cr__copy">
                  <strong>{cast.name}</strong>
                  <br />
                  <small>{cast.character}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="full-ca-cr__col">
            <h3>
              Crew
            <span> {this.props.movie.credits.crew.length} </span>
            </h3>
            {this.props.movie.credits.crew.map((crew, i) => (
              <div key={i} className="full-ca-cr__element">
                {crew.profile_path !== null ? (
                  <img
                    className="full-ca-cr__image"
                    src={profile_img_base_url + crew.profile_path}
                    alt={crew.name}
                  />
                ) : (
                    <div className="no_image_holder w50_and_h50 profile" />
                  )}

                <div className="full-ca-cr__copy">
                  <strong>{crew.name}</strong>
                  <br />
                  <small>{crew.job}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FullCastCrew;
