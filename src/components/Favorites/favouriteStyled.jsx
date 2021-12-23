import styled from 'styled-components';
export const Div= styled.div`
background-color: palevioletred;
border:1px solid black;
height: 100vh;
display: flex;
padding:10% 10% 0 10%;
flex-direction: column;
&> ul{
    display: flex;
    flex-wrap: wrap;
    height: auto;
    min-height: 400px;
    background-color: gray;
}
`



