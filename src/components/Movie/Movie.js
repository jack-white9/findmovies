import React, {Component} from 'react'
import FetchMovie from './FetchMovie'
import MovieUI from './MovieUI'

class Movie extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      movie: ''
    }
    this.handleState = this.handleState.bind(this)
  }

  handleState(isLoading, movieTitle) {
    this.setState({
      loading: isLoading,
      movie: movieTitle
    })
  }

  render() {
    return (
      <div>
        <FetchMovie handleState={this.handleState} movie={this.state.movie}/>
        <MovieUI movie={this.state.movie}/>
      </div>
    )
  }
}

export default Movie
