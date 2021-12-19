import React, {Component} from 'react'
import FetchResults from './FetchResults'
import ResultsUI from './ResultsUI'
import Movie from '../Movie/Movie'

class Results extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      results: '',
      movieid: ''
    }
    this.handleState = this.handleState.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleState(isLoading, movieTitle, id) {
    this.setState({
      loading: isLoading,
      results: movieTitle,
      movieid: id
    })
  }

  handleClick(id) {
    console.log(id)
    this.setState({
      loading: this.state.loading,
      results: this.state.results,
      movieid: id
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <FetchResults 
          handleState={this.handleState} 
          searchQuery={this.props.searchQuery}
          results={this.state.results.results}
        />
        <ResultsUI
          handleClick={this.handleClick}
          searchQuery={this.props.searchQuery} 
          results={this.state.results} 
        />
      </div>
    )
  }
}

export default Results
