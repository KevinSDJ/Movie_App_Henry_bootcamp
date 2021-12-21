import styled from 'styled-components';


export const SearchsCont= styled.div`
    display: flex;
    flex-direction:column;
    h5{
       text-align: left;
       margin-left: 50px;
       padding: 0.5em;
       color:white;
    }
    .cardsCont{
        padding: 0 2%;
        border:0.5px solid rgba(255, 255, 255, 0.5);
        margin:0 auto;
        width:95%;
        transition: 500ms;
        overflow-x: scroll;
        display: flex;
        height: 350px;
        gap:0 5%;
        align-items:center;
        
    }
`
export const Card= styled.div`
   position:relative;
   list-style: none;
   min-width:250px ;
   height: 300px;
   img{
       position:absolute;
       z-index:1;
       width: 100%;
       height: 100%;
   }
   #card_hover{
       opacity: 0;
       z-index:-1;
       display:flex;
       position: absolute;
       width: 100%;
       height: 100%;
      background-color:transparent;      
   }
   &:hover{
    #card_hover{
        background-color:rgba(0,0,0, 0.5);
        backdrop-filter: blur(5px);
        transition:ease-in-out 300ms;
        opacity:1;
        z-index:1;
    }
   }
`