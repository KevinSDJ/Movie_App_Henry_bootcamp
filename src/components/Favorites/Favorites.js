import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeFavoriteMovie}  from '../../actions/index.js';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.moviesFavourites? this.props.moviesFavourites.map(m=><li key={m.id}><Link to={`/movie/${m.id}`}>{m.title}</Link>
          <span><button id={m.id} onClick={(e)=> this.props.dispatch(removeFavoriteMovie(e.target.id))}>REMOVE</button></span></li>):" "}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    moviesFavourites:state.moviesFavourites
  }
}

export default connect(mapStateToProps)(ConnectedList);
