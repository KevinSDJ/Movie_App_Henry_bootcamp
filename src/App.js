import React,{useEffect}from "react";
import Favorites from "./components/Favorites/Favorites";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Carousel from "./components/carousel/carousel";
import { useDispatch } from "react-redux";
import { setTrending } from "./actions";
import Buscador from './components/Buscador/Buscador';

function App() {
  let dispatch= useDispatch()
  useEffect(()=>{
    dispatch(setTrending())    
  },[dispatch])
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/">
            <Carousel/>
            <Buscador/>
          </Route>
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id"  render={({match})=><Movie id={match.params.id}/>} />
      </React.Fragment>
  );
}

export default App;
