import React from 'react'
import Slider from 'react-slick'

function Cast(props) {
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
  };

  return(
    <Slider {...settings}>
      {props.cast.map((cr,i) => (
        <div key={i}>
          <p className="crew-col text-center">
            <img src={props.profile_img_base_url + cr.profile_path} alt={cr.name} onClick={() => props.handlePersonClick(cr.id)}/>
            <br />
            <strong>{cr.name}</strong><br />
            <small>{cr.character}</small>
          </p>
        </div>
      ))
    }
  </Slider>
  )
}

Cast.defaultProps = {
  cast: [],
  profile_img_base_url: ''
}

export default Cast
