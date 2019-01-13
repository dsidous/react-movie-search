import React from "react";

import MediaImage from '../../atoms/MediaImage';
import Spinner from '../../atoms/Spinner';
import PageTransition from "../../atoms/PageTransition";
import MiniHeader from '../../molecules/MiniHeader';

function CastImages(props) {

  if (props.loading) {
    return <Spinner />
  }

  const {
    person: { images, name, id, birthday, profile_path },
    config: { images: { secure_base_url, profile_sizes } }
  } = props;

  const list = [].concat(images)
    .sort((a, b) => b.vote_average - a.vote_average)
    .map((image, i) => (
      <figure key={i} className="cast-images__element">
        <a
          href={secure_base_url + profile_sizes[3] + image.file_path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediaImage
            mediaType="profile"
            size={2}
            filePath={image.file_path}
            name={name}
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
      <MiniHeader
        title={name}
        release_date={birthday}
        poster_path={profile_path}
        link={`/person/${id}`}
        linkCopy="Back to main"
      />

      <div className="cast-images__container">
        {list}
      </div>
    </PageTransition>
  );
}

export default CastImages;
