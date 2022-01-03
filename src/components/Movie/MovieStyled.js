import styled from 'styled-components';

function status(number){
    if(number>=7){
        return "#38BC0A"
    }else if(number>=4){
        return "#E7CF0B"
    }else {
        return "#E7400B"
    }
}

export const Div = styled.div`
    background-color: gray;
`
export const Rating= styled.span`
      background-color: #4D4E4D;
      border:5px solid ${props=> status(props.r)};
      margin:2% 0;
      border-radius: 10em;
      padding:5px 10px;
      color:white;
      font-size:1.2em;
      position:relative;
      &:before{
          content:"Rating";
          color:white;
          position: absolute;
          right:-70px;
      }
`
export const Div2 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
    display: flex;
    padding-top:5%;
    background:radial-gradient(rgba(9, 124, 176, 0.7),rgba(9, 124, 176, 0.7)),url(${props => props.image});
    background-repeat: no-repeat;
    height: 100vh;
    &>div{
        background-color: rgba(0,0,0,0.3);
        display:flex;
        gap:0 10px;
        height: max-content;
        padding:1em;
        justify-content: center;
        .movie-detail{
            display:flex;
            gap:0 10px;
            flex-direction: column;
            width:60%;
            align-items: flex-start;
            .dataMov{
                display: flex;
                flex-direction: row;
                gap:0 10px;
                
                &>div{
                    display: flex;
                    flex-direction: column;                 
                }
               
            h3{
               color:white;
               text-shadow: 1px 1px 2px black;
               font-size:2em;
               margin-bottom:0;
               font-family: 'Roboto', sans-serif;
            }
            span{
                margin-top:2%;
                color:white;
                font-size:1em;
            }
            .clasific{
                color:#F1DB26;
                font-size: 1em;
                border:1px solid #F1DB26;
                border-radius: 3px;
                padding: 0 5px;
            }
            .tagline{
                font-style: italic;
            }
            h4{
                color:white;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: 600;
                font-size:1.5em;
                margin-top: 2%;
            }
            p{
                color:white;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
                font-size:1.2em;
            }
        }
        h5{
            color:white;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 600;
            font-size:1.5em;
               
        }
        p{
            color:white;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 300;
            font-size:1.2em; 
            font-style: italic;
        }
    }
}
`
export const LoadingDetail = styled.div`
       height: 100vh;
       background-color: rgba(9, 124, 176, 0.7);
       display:flex;
       align-items: center;
       justify-content: center;

       .lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

