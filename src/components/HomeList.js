import React from "react";


const HomeList = props => {
  const img_base_path = props.config.images
      ? props.config.images.base_url + props.config.images.poster_sizes[0]
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
            <span>{list.title} ({list.vote_average})</span>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default HomeList;
