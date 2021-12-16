import React, {Component} from 'react'
import FetchResults from './FetchResults'
import ResultsUI from './ResultsUI.js'

class Results extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      results: ''
    }
    this.handleState = this.handleState.bind(this)
  }

  handleState(isLoading, movieTitle) {
    this.setState({
      loading: isLoading,
      results: movieTitle
    })
  }

  render() {
      return (
        <div>
            <p>Results</p>
            <FetchResults handleState={this.handleState} searchQuery={this.props.searchQuery} results={this.state.results.results}/>
            <ResultsUI results={this.state.results}/>
        </div>
      )
  }
}

export default Results
