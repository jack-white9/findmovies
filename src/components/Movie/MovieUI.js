import React, {Component} from 'react'

class Movie extends Component {
    render() {
        const [movie, loading] = [this.props.movie, this.props.loading]
        return (
          <div>
            <img src={'http://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title + ' movie poster'}></img>
            <h1>{loading ? 'Loading...' : movie.original_title}</h1>
            <h2>{movie.release_date}</h2>
            <h3>{movie.genres ? movie.genres[0].name : null}</h3>
            <h4>{movie.overview}</h4>
            <p>{movie.runtime} minutes</p>
            <p>{movie.vote_average}/10 ({movie.vote_count})</p>
            <p>Box office: ${movie.revenue}</p>
            <p>Budget: ${movie.budget}</p>
          </div>
        )
      }
}

export default Movie
