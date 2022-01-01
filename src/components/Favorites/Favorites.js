import React from "react";
import { useSelector } from "react-redux";
import {removeFavoriteMovie}  from '../../actions/index.js';
import Card from "../moviesSearch/Card.js";
import {Div,Div2} from './favouriteStyled';
import {IconContext} from 'react-icons';
import {BsEmojiNeutralFill} from 'react-icons/bs';

export default function  ConnectedList(){
  let favouriteMovie= useSelector(state=> state.moviesFavourites)


  if(favouriteMovie?.length){
    return(<Div>
      <h2>Favourites</h2>
      <ul>
        {favouriteMovie.map(m=><Card
          key={m.id}
          img={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
          id={m.id}
          title={m.title}
          movies={favouriteMovie}
          action={removeFavoriteMovie}
          status={true}
        /> )}
      </ul>
    </Div>)
  }else{
    return (<Div2>
    <div>
       <IconContext.Provider value={{color:"yellow"}}>
          <span>It seems you don't have favorites yet  <BsEmojiNeutralFill/> ?</span>
       </IconContext.Provider>
       
    </div>
    </Div2>)
  }
}



