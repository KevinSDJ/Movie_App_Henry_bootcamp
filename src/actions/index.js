import dotenv from 'dotenv';
export const GET_MOVIES= "GET_MOVIES";
export const GET_MOVIES_DETAIL="GET_MOVIES_DETAIL";
export const ADD_MOVIE_FAVORITE="ADD_MOVIE_FAVORITE";
export const REMOVE_FAVORITE_MOVIE="REMOVE_FAVORITE_MOVIE";
export const SET_TRENDING="SET_TRENDING";

dotenv.config()
export  function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload:payload };
  }

export function removeFavoriteMovie(index){
 
  return { type: "REMOVE_FAVORITE_MOVIE", payload:index};
}
export function getMovieDetail(index){
  return function(dispatch){
    return fetch(`https://api.themoviedb.org/3/movie/${index}?api_key=1b8860ae930c966f835fc2abaafdade9&language=en-US`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    dispatch({ type: "GET_MOVIES_DETAIL", payload:data })
  });
  }
}

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=true&api_key=1b8860ae930c966f835fc2abaafdade9&query=${titulo}`)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "GET_MOVIES", payload:data.results });
        });
    };
  }
export function setTrending(){
  return function(dispatch){
    return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=1b8860ae930c966f835fc2abaafdade9`)
    .then(res=>res.json())
    .then(r=>{
      dispatch({type:SET_TRENDING,payload:r.results})
    })
  }
}
  
  



