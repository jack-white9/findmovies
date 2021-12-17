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

  handleState(isLoading, movieTitle) { // method not needed??
    this.setState({
      loading: isLoading,
      results: movieTitle
    })
  }

  render() {
    //console.log(this.state) // this.props.searchQuery being updated, this.state.results is not... difference between props and state???
    return (
      <div>
        <FetchResults handleState={this.handleState} searchQuery={this.props.searchQuery} results={this.state.results.results}/>
        <ResultsUI searchQuery={this.props.searchQuery} results={this.state.results}/>
      </div>
    )
  }
}

export default Results
