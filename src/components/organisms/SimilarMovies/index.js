import React from "react";
import Slider from "react-slick";

function SimilarMovies(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  checkMobile();

  function checkMobile() {
    if (window.innerWidth < 640) {
      Object.assign(settings, {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        swipeToSlide: true
      });
    }
  }

  return (
    <div className="similar">
      <h4>Similar movies</h4>
      <Slider {...settings}>
        {props.similar.map((sim, i) => (
          <div
            key={i}
            className="similar-movies__element"
            onClick={() => props.handleMovieClick(sim.id)}
          >
            <p className="crew-col text-center">
              <img
                src={props.img_base_path + sim.poster_path}
                alt={sim.original_title}
                className="similar-movies-img"
              />
              <br />
              <small>{sim.original_title}</small>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimilarMovies;
