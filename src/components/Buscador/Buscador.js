import React from "react";
import {useDispatch} from "react-redux";
import {getMovies } from "../../actions/index.js";
import MovSearchs from "../moviesSearch/movSearch.js";
import {Form,FormContent} from './buscadorStyled';
import {FaSearch} from 'react-icons/fa';
import {IconContext} from 'react-icons';



export default function Buscador () {
  let dispatch= useDispatch()
  const [state,setState]= React.useState({
    title:""
  })
  function handleChange(event) {
  
    setState({
      ...state,
      title:event.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(state.title){
      dispatch(getMovies(state.title))
    setState(prev=>{
      return {...prev,title:""}
    })
    }else{
      alert("title not entered")
    }
    
  }

 
    return (
      <FormContent>
        <Form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={state.title}
              placeholder="search movie"
              onChange={(e)=>handleChange(e)}
            />
            <IconContext.Provider value={{color:"grey"}}>
              <button type="submit"><FaSearch /></button>
            </IconContext.Provider>
            
          </div>
        </Form>
        <MovSearchs/>
      </FormContent>
    );
  }

