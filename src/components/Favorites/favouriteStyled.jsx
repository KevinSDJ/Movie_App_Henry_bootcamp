import styled from 'styled-components';
export const Div= styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
height: 100vh;
display: flex;
padding-top: 5%;
flex-direction: column;
align-items: center;
h2{
    font-size:24px;
    color:white;
    font-family: 'Roboto', sans-serif;
}
&> ul{
    position:relative;
    display: flex;
    justify-content: center;
    gap:20px 20px;
    flex-wrap: wrap;  
    width:80%;
    padding:20px 5px;
    align-items: center;
    background-color: rgba(9, 124, 176, 0.5);
    
}
`
export const Div2= styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
   height: 100vh;
   display: flex;
   align-items:center;
   justify-content: center;
   &>div{
       align-items: center;
       margin:0 auto;
       span{
           color:white;
           font-size: 26px;
           font-family: 'Roboto', sans-serif;
       }
   }

`


