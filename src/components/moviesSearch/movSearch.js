import React from "react";
import { useSelector} from "react-redux";
import { addMovieFavorite } from '../../actions/index'
import {SearchsCont } from './movSearchStyled'
import Card from "./Card";




export default function MovSearchs() {
   
    let moviesLoaded = useSelector(state => state.moviesLoaded)
    let moviesTrending=useSelector(state=>state.moviesTrending)
    if (moviesLoaded?.length>1) {
        return (
            <SearchsCont>
                <h5>Results</h5>
                <div className="cardsCont">
                    {moviesLoaded ? moviesLoaded.map(
                        (t, i) =>  <Card key={i} 
                            img={`https://image.tmdb.org/t/p/original/${t.poster_path}`}
                            title={t.title}
                            id={t.id}
                            action={addMovieFavorite}
                            movies={moviesLoaded}
                        />) : null}
                </div>
            </SearchsCont>
        )
    } else {
        return (
            <SearchsCont>
                <h5>Trending Week</h5>
                <div className="cardsCont">
                    {moviesTrending ? moviesTrending.map(
                        (t, i) => <Card key={i} 
                            img={`https://image.tmdb.org/t/p/original/${t.poster_path}`}
                            title={t.title}
                            id={t.id}
                            action={addMovieFavorite}
                            movies={moviesTrending}
                        />) : null}
                </div>
            </SearchsCont>
        )
    }
}