import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import ReactPlayer from 'react-player';
import { Div, Div2, LoadingDetail ,Rating} from './MovieStyled';



export default function Movie(props) {
    let [isLoading, setState] = useState(true)
    let [trailer, setTrailer] = useState(null)
    let [release,setRelease] = useState(null)
    let movieDetail = useSelector(state => state.movieDetail)
    let dispatch = useDispatch()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${props.id}/videos?language=en-US&api_key=1b8860ae930c966f835fc2abaafdade9`)
            .then(r => r.json())
            .then(rs => {
                let trailers = rs.results.filter(e => e.type === "Trailer")
                setTrailer(`https://www.youtube.com/embed/${trailers[trailers.length - 1].key}`)
            })
            .finally(()=>{
                fetch(`https://api.themoviedb.org/3/movie/${props.id}/release_dates?api_key=1b8860ae930c966f835fc2abaafdade9`)
                .then(r=> r.json())
                .then(rs=>{
                    let i= rs.results.filter(e=> e.iso_3166_1==="US")
                    setRelease(i)
                })
            })
    }, [props.id])
    useEffect(() => {
        dispatch(getMovieDetail(props.id.toString()))
        if (isLoading) {
            setTimeout(() => {
                setState(!isLoading)
            }, (2000))
        }
    }, [dispatch, isLoading, props.id])

    if (!isLoading) {
        return (
            <Div> 
                {movieDetail ? <Div2 image={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}>
                    <div>
                        <div className="movie-detail">
                            <div className="dataMov">
                                <img src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`} width={250}  alt={movieDetail.Title} />
                                <div>
                                    <h3>{movieDetail.title}</h3>
                                    <span>{release? <span className='clasific'>{release[0].release_dates[0].certification}</span>: null} - {movieDetail.release_date}({release? release[0].iso_3166_1:null})</span>
                                    <span className="tagline">{movieDetail.tagline}</span>
                                    <h4>Overview</h4>
                                    <p>{movieDetail.overview}</p>
                                </div> 
                            </div>
                            <Rating r={Math.round(movieDetail.vote_average)} rt={movieDetail.vote_average}></Rating>
                            <h5>Genres</h5>
                            <p>{movieDetail.genres?movieDetail.genres.map((e,i)=>e.name+" ,"):null}</p>
                        </div>
                        <ReactPlayer
                        url={trailer}
                        playing={true}
                        width={600}
                        height={400}
                        controls={true}
                    />
                    </div>       
                </Div2> : <div>opps an error occurred</div>}
            </Div>
        );
    } else {
        return (
            <LoadingDetail id="msg">
                <div className="lds-roller"><div></div><div></div><div></div><div></div></div>
            </LoadingDetail>)
    }

}


