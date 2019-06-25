import React, { Component } from "react";
import Like from "./common/like"
import Pagination from "./common/pagination"
import { getMovies } from "../services/fakeMovieService" ;
import { pagenate } from "../utilis/pagenate" ;


class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage : 1, 
    pageSize : 4
  };

  handleDelete = movie => {
      const movies = this.state.movies.filter(m => m._id !== movie._id) ;
      this.setState ({ movies })
  }

  handleClick = movie => {
      const movies = [...this.state.movies] ;
      const index = movies.indexOf(movie) ;
      movies[index]={...movies[index]} ;
      movies[index].liked = !movies[index].liked ;
      this.setState ({ movies }) ;
  }

  handlePageChange = page =>{
      this.setState({currentPage : page})
  }

    render() { 

        /*      const { length : count } = this.state.movies ;
        if (count === 0)  
        <p> Showing {count} movies in Database</p>
*/
        
        const {pageSize, currentPage, movies : movi} = this.state;
        
        
        if (this.state.movies.length === 0)
            return <p>Oppa!! <br/>There are no movies in the database.</p>

        const movies = pagenate(movi, currentPage, pageSize);    //line 45 & line 62 Connected (const name)

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
                    {movies.map(movie => <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like 
                                onClick={() => this.handleClick(movie)}
                                liked={movie.liked}
                        /></td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        
                    </tr>)}
                </tbody>
            </table>

            <Pagination 
                itemsCount={this.state.movies.length}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange}
            />

            </React.Fragment>
         );
    }
}

 
export default Movies;