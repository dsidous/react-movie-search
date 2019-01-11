import React from "react";
import { Link } from "react-router-dom";

import MediaImage from '../../atoms/MediaImage';
import Spinner from '../../atoms/Spinner';
import PageTransition from "../../atoms/PageTransition";

function CastImages(props) {

  if (props.loading) {
    return <Spinner />
  }

  const images = props.person.images
    .sort((a, b) => b.vote_average - a.vote_average)
    .map((image, i) => (
      <figure key={i} className="cast-images__element">
        <a href={props.config.images.secure_base_url +
          props.config.images.profile_sizes[3] +
          image.file_path} target="_blank" rel="noopener noreferrer">
          <MediaImage
            mediaType="profile"
            size={2}
            filePath={image.file_path}
            name={props.person.name}
          />
          <figcaption>
            <p>
              Size: <br />
              {image.height} x {image.width}
            </p>
          </figcaption>
        </a>
      </figure>
    ));
  return (
    <PageTransition>
      <div className="cast-images__header">
        <Link to={`/person/${props.person.id}`}><h2>{props.person.name}</h2></Link>
      </div>
      <div className="cast-images__container">{images}</div>
    </PageTransition>
  );
}

export default CastImages;
