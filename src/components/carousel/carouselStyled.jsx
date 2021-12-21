import styled from "styled-components";




export const CarouselCont= styled.div`
   position:relative;
   height: 100vh;
   .carousel-inner{
     @media screen and (min-width:1024px){
       height:100vh;
     } 
   }
`
export const Cap= styled.div`
    position: absolute;
    top:0;
    z-index:1;
    height: 50%;
    width: 100%;
    background-color: transparent;
    
`
