import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        this.props.dispatch(getMovieDetail(this.props.id.toString()))
       
        setTimeout(()=>{
                    document.getElementById('msg').hidden=true;
                    document.getElementById('detail').hidden=false
                },(2000))
        
    };
    
  
   

    render() {
        return (
            
            <div className="movie-detail">
                <span id="msg">Wait charger</span>
                <div hidden id="detail">
                    {this.props?<div>
                   
                   <div><img src={`https://image.tmdb.org/t/p/original/${this.props.movieDetail.poster_path}`} width={"300px"} alt={this.props.movieDetail.Title}/></div>
                   <article>
                       <h3>{this.props.movieDetail.title}</h3>
                       <div><span><h4>Genero:</h4>{this.props.movieDetail.Genre}</span><span><h4>Año:</h4>{this.props.movieDetail.Year}</span></div>
                   </article>
                   

                </div>:<div>opps no hay datos</div>}
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movieDetail:state.movieDetail,
    }
}

export default connect(mapStateToProps)(Movie);