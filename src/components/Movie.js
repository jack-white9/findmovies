import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faStar } from '@fortawesome/free-solid-svg-icons'

class Movie extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleState('', '', '', '')
    }

    componentDidUpdate(prevProps) {
        if (prevProps.state.movieID !== this.props.state.movieID && this.props.state.searchQuery) {
            fetch(`https://api.themoviedb.org/3/movie/${this.props.state.movieID}?api_key=${process.env.REACT_APP_API_KEY}`)
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
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })

        if (movie) {
            return (
                <div className="movie">
                    <button 
                        onClick={this.handleClick}
                        className="movie__button"
                    >
                        <FontAwesomeIcon icon={faAngleLeft}/>
                        &nbsp;Back
                    </button>
                    <main className="movie__container">
                        <img
                            src={'http://image.tmdb.org/t/p/w500' + movie.poster_path} 
                            alt={movie.original_title + ' movie poster'}
                            className="movie__img"
                            />
                        <section className="movie__container--info">
                            <h1 className="movie__container__info--title">{movie.original_title}</h1>
                            <h2 className="movie__container__info--details">{movie.release_date} &bull; {movie.genres[0].name} &bull; {movie.runtime} minutes</h2>
                            <h3 className="movie__container__info--ratings"><FontAwesomeIcon icon={faStar}/> {movie.vote_average}/10 ({movie.vote_count})</h3>
                            <h4 className="movie__container__info--tagline">{movie.tagline}</h4>
                            <h5 className="movie__container__info--overview-heading">Overview</h5>
                            <p className="movie__container__info--overview">{movie.overview}</p>
                            <section className="movie__container__info--details">
                                <section className="movie__container__info__details--subcontainer">
                                    <h5 className="movie__container__info--subheading">Status</h5>
                                    <p className="movie__container__info--text">{movie.status}</p>
                                </section>
                                <section className="movie__container__info__details--subcontainer">
                                    <h5 className="movie__container__info--subheading">Box Office</h5> 
                                    <p className="movie__container__info--text">{formatter.format(movie.revenue).slice(0, -3)}</p>
                                </section>
                                <section className="movie__container__info__details--subcontainer">
                                    <h5 className="movie__container__info--subheading">Budget</h5>
                                    <p className="movie__container__info--text">{formatter.format(movie.budget).slice(0, -3)}</p>
                                </section>
                            </section>
                        </section>
                    </main>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Movie
