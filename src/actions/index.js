import axios from 'axios';

export const GET_MOVIE_TMDB = 'GET_MOVIE_TMDB';

export function getMovie(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: "GET_MOVIE_TMDB"});
    axios.get(url)
      .then((response) => {
        dispatch({type:"GET_MOVIE_TMDB_FULFILLED",movie: response.data})
      })
      .catch((err) => {
        dispatch({type:"GET_MOVIE_TMDB_REJECTED", movie: err})
      })
  }
}
