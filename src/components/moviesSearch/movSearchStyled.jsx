import styled from 'styled-components';


export const SearchsCont= styled.div`
    display: flex;
    flex-direction:column;
    h5{
       text-align: left;
       margin-left: 50px;
       font-size: 1em;
       padding: 0.2em;
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
        height: 300px;
        gap:0 2%;
        align-items:center;
        
    }
`
export const Card= styled.div`
   box-sizing: border-box;
   position:relative;
   list-style: none;
   min-width:200px;
   height: 250px;
   img{
       position:absolute;
       z-index:1;
       width: 100%;
       height: 100%;
   }
   #card_hover{
       box-sizing: content-box;
       opacity: 0;
       z-index:-1;
       display:flex;
       position: absolute;
       width: 100%;
       height: 100%;
      background-color:transparent;
      flex-direction:column;
      align-items: center;
      h3{
          font-size: 100%;
          text-align: center;
          padding: 2% 5%;
          color:white;
          margin: 0 auto;
          text-align: justify;
      }
      a{
          text-decoration: none;
          color:white;
          &:hover{
              color:cyan;
          }
      }
      button{
          position:absolute;
          background-color: transparent;
          border: none;
          bottom: 10px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          padding: 10%;
          right: 10px;
          outline:none;
          &.isFavourite{
            background-image: url("data:image/png;base64,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");
          }
          &.notFavourite{
           background-image:url('data:image/png;base64,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');
          }
      }
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