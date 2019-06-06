import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService" ;
import Like from "./common/like" ;

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
      const movies = this.state.movies.filter(m => m._id !== movie._id) ;
      this.setState ({ movies })
  }

  handleClick = movie => {
      console.log ("liked clicked" ,movie);

      const movies = [...this.state.movies] ;
      const index = movies.indexOf(movie) ;
      movies[index] = {...movies[index]} ;
      movies[index].liked = !movies[index].liked ;
      this.setState ({ movies }) ;
  }

    render() { 

        /*      const { length : count } = this.state.movies ;
        if (count === 0)  
        <p> Showing {count} movies in Database</p>
*/
        
        if (this.state.movies.length === 0)
            return <p>Oppa!! <br/>There are no movies in the database.</p>

        return (
            <React.Fragment>   
            <p> Showing {this.state.movies.length} movies in Database</p> 
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Slock</th>
                        <th>Rate</th>
                        <th>    </th>
                        <th>    </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>  <Like    
                                     click = {()=> this.handleClick(movie)}
                                     liked = {movie.liked}  
                        />  </td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
            </React.Fragment>
         );
    }
}

 
export default Movies;