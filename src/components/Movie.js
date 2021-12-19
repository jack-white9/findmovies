import React, {Component} from 'react'

class Movie extends Component {
    componentDidUpdate(prevProps) {
        if (prevProps.state.movieID !== this.props.state.movieID) {
            fetch(`https://api.themoviedb.org/3/movie/${this.props.state.movieID}?api_key=0099fa805ff60f1cae24e90d7be97930`)
            .then(response => response.json())
            .then(data => this.props.handleState(
              this.props.state.searchQuery,
              this.props.state.results,
              this.props.state.movieID,
              data
            ))
        }
      }

    render() {
        const movie = this.props.state.movieData
        if (movie) {
            return (
                <div>
                    <img src={'http://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title + ' movie poster'}></img>
                    <h1>{movie.original_title}</h1>
                    <h2>{movie.release_date}</h2>
                    <h3>{movie.genres ? movie.genres[0].name : null}</h3>
                    <h4>{movie.overview}</h4>
                    <p>{movie.runtime} minutes</p>
                    <p>{movie.vote_average}/10 ({movie.vote_count})</p>
                    <p>Box office: ${movie.revenue}</p>
                    <p>Budget: ${movie.budget}</p>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Movie
