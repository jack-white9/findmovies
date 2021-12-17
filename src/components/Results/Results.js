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
    this.handleClick = this.handleClick.bind(this)
  }

  handleState(isLoading, movieTitle) {
    this.setState({
      loading: isLoading,
      results: movieTitle
    })
  }

  handleClick(id) {
    console.log(id)
  }

  render() {
    return (
      <div>
        <FetchResults handleState={this.handleState} searchQuery={this.props.searchQuery} results={this.state.results.results}/>
        <ResultsUI searchQuery={this.props.searchQuery} results={this.state.results} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Results
