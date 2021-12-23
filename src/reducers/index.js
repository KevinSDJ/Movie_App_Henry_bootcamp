
import {GET_MOVIES,ADD_MOVIE_FAVORITE,REMOVE_FAVORITE_MOVIE,GET_MOVIES_DETAIL,SET_TRENDING} from '../actions/';

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    moviesTrending:[]
  };



 export default function rootReducer(state = initialState, action) {
      switch(action.type){
           case ADD_MOVIE_FAVORITE:
                return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
           case GET_MOVIES:
               return {
          ...state,
          moviesLoaded: action.payload
        }
           
          case GET_MOVIES_DETAIL:
            console.log(action.payload)
            return{
              ...state,
              movieDetail:action.payload
            }   


           case REMOVE_FAVORITE_MOVIE:
             return {
               ...state,
               moviesFavourites:state.moviesFavourites.filter(m=>m.id!==Number(action.payload))
             }
           case SET_TRENDING:
             return {
               ...state,
               moviesTrending:action.payload
             }
          default:return state
      }
  }
  
  




