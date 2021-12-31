import styled from 'styled-components';
export const Div= styled.div`
border:1px solid black;
height: 100vh;
display: flex;
padding:10% 10% 0 10%;
flex-direction: column;
&> ul{
    position:relative;
    display: flex;
    justify-content: center;
    gap:0 2%;
    flex-wrap: wrap;
    height: auto;
    min-height: 400px;
    background-color: rgba(9, 124, 176, 0.5);
    backdrop-filter: blur(5px);
    &::before{
        content: " ";
        background-color: gray;
        z-index: 2;
        position:absolute;
        justify-content: center;
        margin:0 auto;
    }
}
`



