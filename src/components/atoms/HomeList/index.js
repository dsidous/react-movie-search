import React from "react";
import MediaImage from '../MediaImage';

const HomeList = props => {
  
  return (
    <div className="home-list">
      <div className="home-list__title">{props.title}</div>
      <ul className="home-list__list">
        {props.list.map(list => (
          <li
            className="home-list__list-element"
            key={list.id}
            onClick={() => props.goToMovie(list.id)}
          >
            <MediaImage
              mediaType="poster"
              size={0} 
              filePath={list.poster_path} 
              name={list.title} 
            />
            <div className="list-data">
              <div className="list-data__title">
                {list.title} ({list.vote_average})
              </div>
              <div className="list-data__genres">
                {list.genre_names.genre_name.map((genreName, i) =>
                  list.genre_names.length === i + 1
                    ? genreName
                    : genreName + ", "
                )
                }
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeList;
