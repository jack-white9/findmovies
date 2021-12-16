import React, {Component} from 'react'
import Fetch from './components/Fetch'
import MovieUI from './components/MovieUI'

class App extends Component { // This component should be changed from App to Movie, containing all logic for the Movie page - change current Movie component to MovieUI or something
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
