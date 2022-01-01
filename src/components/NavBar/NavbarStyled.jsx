import styled from 'styled-components';



export const Header = styled.header`
    z-index: 2;
    position:fixed;
    height: 40px;
    width: 100%;
    top: 0;
    background-color: #303236;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    div{
        display:flex;
        align-items:center;
        color:white;
        gap:0 5px;
        h1{
            font-size: 1.2em;
            font-family: Roboto;
            margin: 0;
            @media screen and (max-width:600px){
                font-size: 18px;
                line-height: 1;
            }
        }
    }
    nav{
        height: 100%;
        box-sizing: border-box;
    }
    background-color: rgba(9, 124, 176, 0.5);
    backdrop-filter: blur(10px);
`
export const Ul = styled.ul`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
    width:100%;
    box-sizing: border-box;
    li{
        text-decoration: none;
        display: flex;
        gap:0 10%;
        box-sizing: border-box;
        a{
            font-family: 'Roboto', sans-serif;
            font-size: 1em;
            color:white;
            width: max-content;
            &:hover{
            text-decoration: line;
            
        }
        @media screen and (max-width:600px){
                font-size: 14px;
            }
        }
        
    }
`