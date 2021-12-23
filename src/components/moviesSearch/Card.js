import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { C } from './movSearchStyled'




export default function Card({ img, id, title,movies,action,status}) {
    const dispatch= useDispatch()
    return (
        <C>
            <img loading="lazy" src={img} alt={id} />
            <div id="card_hover" >
                <h3>{title}</h3>
                <Link to={`/movie/${id}`}>view details</Link>
                <button className={status?"isFavourite":"notFavourite"} id={id} onClick={
                    (e) => {
                        e.preventDefault()
                        if(status){
                            document.getElementById(e.target.id).className="notFavourite";
                            dispatch(action(e.target.id))
                        }else{
                            var peli = movies.filter(m => m.id === Number(e.target.id))
                            document.getElementById(e.target.id).className = "isFavourite";
                            dispatch(action(peli[0]))
                        }
                        
                    }} type="button"></button>
            </div>
        </C>
    )

}