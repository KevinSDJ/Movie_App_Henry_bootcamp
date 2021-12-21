import styled from 'styled-components';



export const Form = styled.form`
    background-color: rgba(9, 124, 176, 0.5);
    padding: 10px;
    backdrop-filter: blur(5px);
    position: absolute;
    top: -50px;
    right: 0;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
`
export const FormContent= styled.div`
    background-color: rgba(9, 124, 176, 0.5);
    backdrop-filter: blur(5px);
    position:absolute;
    top:50%;
    height: 50%;
    width:100%;
    z-index:2;
`