import React, { Component } from "react";
import MoviesTable from "./moviesTable" 
import Pagination from "./common/pagination"
import ListGroup from "./common/listgroup"
import { getMovies } from "../services/fakeMovieService" ;
import { getGenres } from "../services/fakeGenreService" ;
import { pagenate } from "../utilis/pagenate" ;


class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage : 1, 
    pageSize : 4
  };

  componentDidMount() {
      const genres = [ {name: 'All Genre'}, ...getGenres()]
      this.setState ({ movies : getMovies(), genres });
  }

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

  handleGenersSelect = genre => {
    this.setState({selectedGenre : genre, currentPage:1 })
  }

    render() { 

        /*      const { length : count } = this.state.movies ;
        if (count === 0)  
        <p> Showing {count} movies in Database</p>
*/
        
        const {pageSize, currentPage, selectedGenre,  movies : movi } = this.state;         //const {pageSize, currentPage, movies : movi } = this.state;
                                                                           //const movies = pagenate(movi, currentPage, pageSize);   <-----LINE 62------>
        
        if (this.state.movies.length === 0)
            return <p>Oppa!! <br/>There are no movies in the database.</p>

        const filtered = selectedGenre && selectedGenre._id
        ? movi.filter(m => m.genre._id === selectedGenre._id) 
        : movi;
        const movies = pagenate(filtered, currentPage, pageSize);    //line 45 & line 62 Connected (const name)

        return (
            <div className="row"> 
                <div className="col-3">
                    <ListGroup
                    items={this.state.genres}
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenersSelect}
                    />
                </div>
                <div className="col">
                    
                <p> Showing {filtered.length} movies in Database</p>
            
            <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleClick}
            />

            <Pagination 
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
            />    
                    
                </div>  
            

            </div>
         );
    }
}

 
export default Movies;