import React from "react";
import {useDispatch} from "react-redux";
import {getMovies } from "../../actions/index.js";
import MovSearchs from "../moviesSearch/movSearch.js";
import {Form,FormContent} from './buscadorStyled';


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
    dispatch(getMovies(state.title))
    setState(prev=>{
      return {...prev,title:""}
    })
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
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <button type="submit">SEARCH</button>
        </Form>
        <MovSearchs/>
      </FormContent>
    );
  }
