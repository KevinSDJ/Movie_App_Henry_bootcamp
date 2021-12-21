import React from 'react';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux'


import { Cap, CarouselCont } from './carouselStyled'

let childsLide = ["First slide",
    "Second slide",
    "Third slide",
    "Fourth slide",
    "Fifth slide",
    "Sixth slide",
    "Seventh slide",
    "Eighth slide",
    "Ninth slide",
    "Tenth slide",
    "Eleventh slide",
    "Twelfth slide",
    "Thirtieth slide",
    "Fourteenth slide",
    "Fifteenth slide",
    "Sixteenth slide",
    "Seventeenth slide",
    "Eighteenth slide",
    "Nineteenth slide",
    "Twenty slide"]
   

export default function Carousel() {
    let trendingMov = useSelector(state => state.moviesTrending)
    
    useLayoutEffect(() => {
        let interval=setInterval(()=>{
            document.getElementById("next").click()
        },(1000*10))
        
        return ()=>clearInterval(interval)
    },[])
    
    if (trendingMov?.length > 0) {
        return (
            <CarouselCont id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel"  >
                <Cap/>
                <div className="carousel-inner">
                    {trendingMov.map((e, i) => <div key={e.id} className={`carousel-item ${i === 0 && "active"}`}>
                        <img loading='lazy' className="d-block w-100" src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`} alt={`${childsLide[i]}`} />
                    </div>)}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" hidden></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a id="next" className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" hidden></span>
                    <span className="sr-only">Next</span>
                </a>
            </CarouselCont>
        )
    } else {
        return null
    }


}