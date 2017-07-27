import React from 'react'
import Slider from 'react-slick'

function SimilarMovies(props) {
  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1
  };

  return(
    <Slider {...settings}>
      {props.similar.map((sim,i) => (
        <div key={i} className="similar-movies__element"
            onClick={() => props.handleMovieClick(sim.id)}
          >
          <p className="crew-col text-center">
            <img src={props.img_base_path + sim.poster_path} alt={sim.original_title} /><br />
            <small>{sim.original_title}</small>
          </p>
        </div>
      ))
      }
    </Slider>
  )
}

export default SimilarMovies
