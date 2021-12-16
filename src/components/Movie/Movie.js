import React, {Component} from 'react'
import Fetch from './Fetch'
import MovieUI from './MovieUI'

class App extends Component {
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
        <Fetch handleState={this.handleState} movie={this.state.movie}/>
        <MovieUI movie={this.state.movie}/>
      </div>
    )
  }
}

export default App
