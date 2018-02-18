import React from "react";

const HomeList = props => {
  const img_base_path = props.config.config.images
    ? props.config.config.images.base_url +
      props.config.config.images.poster_sizes[0]
    : "";
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
            <img src={img_base_path + list.poster_path} alt={list.title} />
            <div className="list-data">
              <div className="list-data__title">
                {list.title} ({list.vote_average})
              </div>
              <div className="list-data__genres">
                {list.genre_ids.map((genreId, i) =>
                  props.config.genres
                    .filter(genre => genre.id === genreId)
                    .map(g => {
                      return list.genre_ids.length === i + 1
                        ? g.name
                        : g.name + ", ";
                    })
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeList;
