import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Spinner from '../../atoms/Spinner';
import Season from '../../molecules/Season';
import MediaImage from '../../atoms/MediaImage';
import PageTransition from "../../atoms/PageTransition";

class Seasons extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    if (this.props.loading) {
      return <Spinner />
    }

    const { tv: { seasons, name, first_air_date, id, poster_path } } = this.props;

    return (
      <PageTransition>
        <div className="seasons__header">
          <div className="seasons__header__inner">
            <MediaImage
              mediaType="poster"
              size={1}
              filePath={poster_path}
              name={name}
            />
            <div className="seasons__header__info">
              <h2>{name}&nbsp;
                <span>({first_air_date.slice(0, 4)})</span>
              </h2>
              <h4>
                <Link to={`/tv/${id}`}>&#8592; Back to main</Link>
              </h4>
            </div>
          </div>
        </div>
        <ul className="seasons">
          {seasons.sort((a, b) => a.season_number - b.season_number).map(season => (
            <li className="seasons__element" key={season.season_number}>
              <Season season={season} tvId={id} />
            </li>
          ))}
        </ul>
      </PageTransition>
    );
  }
}

export default Seasons;
