import axios from "axios";
import {
  APIKEY,
  GET_PERSON_TMDB,
  GET_TOPPEOPLE_TMDB
} from "./types";

export function getPerson(query, callback){
  const url = `https://api.themoviedb.org/3/person/${query}?&api_key=${APIKEY}&append_to_response=movie_credits,images`

  return function(dispatch) {
    dispatch({type: GET_PERSON_TMDB});
    axios.get(url)
      .then(({data}) => {
        dispatch({type: GET_PERSON_TMDB + "_FULFILLED",person: data})
      })
      .then(() => callback ? callback() : null)
      .catch((err) => {
        dispatch({type: GET_PERSON_TMDB + "_REJECTED",person: err})
      })
  }
}

export function getTopPeople(query){
  const url = `https://api.themoviedb.org/3/person/popular?&api_key=${APIKEY}${query}`
  
  return function(dispatch) {
    dispatch({type: GET_TOPPEOPLE_TMDB});
    axios.get(url)
      .then((response) => {
        dispatch({type: GET_TOPPEOPLE_TMDB + "_FULFILLED",toppeople: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_TOPPEOPLE_TMDB + "_REJECTED",toppeople: err})
      })
    }
  }