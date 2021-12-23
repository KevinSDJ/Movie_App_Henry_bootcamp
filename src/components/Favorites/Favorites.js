import React from "react";
import { useSelector } from "react-redux";
import {removeFavoriteMovie}  from '../../actions/index.js';
import Card from "../moviesSearch/Card.js";
import {Div} from './favouriteStyled';

export default function  ConnectedList(){
  let favouriteMovie= useSelector(state=> state.moviesFavourites)
  return (
    <Div>
        <h2>Your Favourite Movie</h2>
        <ul>
          {favouriteMovie?.length>0? favouriteMovie.map(m=><Card
            key={m.id}
            img={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
            id={m.id}
            title={m.title}
            movies={favouriteMovie}
            action={removeFavoriteMovie}
            status={true}
          /> ):null}
        </ul>
      </Div>
  ) 
}



