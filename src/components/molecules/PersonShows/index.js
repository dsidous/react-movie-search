import React from 'react';

import MediaImage from '../../atoms/MediaImage';

const PersonShows = ({ shows }) => { 
  if(shows.cast.length>0) {
   
    const end = shows.cast
    // .sort((a, b) => {
    //   const data_b = b.release_date || b.first_air_date;  
    //   const data_a = a.release_date || a.first_air_date;  
    //   return data_b ? data_b.localeCompare(data_a) : -1
    // })
    .map((show,i) => {
      console.log(i);

      const {id,poster_path,character} = show;
      const show_attr = show.release_date 
        ? {title:"title",release_date:"release_date",show_type:"movie"}
        : {title:"name",release_date:"first_air_date",show_type:"tv"};
      
      const title = show[show_attr.title];
      const release_date = show[show_attr.release_date] || '';
      const { show_type } = show_attr;
      return (
        <div
          key={id + i}
          className="person-movie"
          //onClick={() => this.props.handlePersonMovieClick(id,show_type)}
        >
          <p className="person-movie__poster">
            <MediaImage
              mediaType="poster"
              size={1} 
              filePath={poster_path} 
              name={title} 
            />
          </p>
          <p className="person-movie__release">
            {release_date !== "" &&
              release_date !== undefined
              ? release_date.substr(0, 4)
              : ""}
          </p>
          <p className="person-movie__title">
            {title}
            {character && (
              <span className="person-movie__character">
                {" "}
                as {character}
              </span>
            )}
          </p>
        </div>
      )
    });
    return end;

  }
  return null;
}  

export default PersonShows;