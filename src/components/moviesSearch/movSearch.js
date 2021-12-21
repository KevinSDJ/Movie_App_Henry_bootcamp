import React from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { addMovieFavorite } from '../../actions/index'
import { Card, SearchsCont } from './movSearchStyled'




export default function MovSearchs() {
    let dispatch = useDispatch()
    let moviesLoaded = useSelector(state => state.moviesLoaded)
    let moviesTrending=useSelector(state=>state.moviesTrending)
    if (moviesLoaded?.length>1) {
        return (
            <SearchsCont>
                <h5>Results</h5>
                <div className="cardsCont">
                    {moviesLoaded ? moviesLoaded.map(
                        (t, i) => <Card key={i}  poster={`https://image.tmdb.org/t/p/original/${t.poster_path}`}>
                            <div id="card_hover" >
                                <Link to={`/movie/${t.id}`}>{t.title}</Link>
                                <p>{t.overview}</p>
                                <button id={t.title} onClick={
                                    (e) => {
                                        e.preventDefault()
                                        var peli = moviesLoaded.filter(m => m.title === e.target.id)
                                        dispatch(addMovieFavorite(peli[0]))
                                    }} type="button">ADD/FAV</button>
                            </div>


                        </Card>) : null}
                </div>
            </SearchsCont>
        )
    } else {
        return (
            <SearchsCont>
                <h5>Trending Week</h5>
                <div className="cardsCont">
                    {moviesTrending ? moviesTrending.map(
                        (t, i) => <Card key={i} >
                            <img loading="lazy" src={`https://image.tmdb.org/t/p/original/${t.poster_path}`} alt={t.id}/>
                            <div id="card_hover" >
                                <Link to={`/movie/${t.id}`}>{t.title}</Link>
                                <p>{t.overview}</p>
                                <button id={t.title} onClick={
                                    (e) => {
                                        e.preventDefault()
                                        var peli = moviesTrending.filter(m => m.title === e.target.id)
                                        dispatch(addMovieFavorite(peli[0]))
                                    }} type="button">ADD/FAV</button>
                            </div>


                        </Card>) : null}
                </div>
            </SearchsCont>
        )
    }
}