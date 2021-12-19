import React, {Component} from 'react'
import Search from './components/Search'
import Landing from './components/Landing'
import Results from './components/Results'
import Movie from './components/Movie'

class App extends Component {
    constructor() {
        super()
        this.state = {
            searchQuery: '',
            results: '',
            movieID: '',
            movieData: ''
        }
        this.handleState = this.handleState.bind(this)
    }

    handleState(searchQueryParam, resultsParam,movieIDParam, movieDataParam) {
        this.setState({
            searchQuery: searchQueryParam,
            results: resultsParam,
            movieID: movieIDParam,
            movieData: movieDataParam
        }, () => console.log(this.state))        
    }

    render() {
        return (
            <div>
                {this.state.movieData ? null : <Landing state={this.state} handleState={this.handleState} />}
                {this.state.movieData ? null: <Search state={this.state} handleState={this.handleState} />}
                {this.state.movieData ? null: <Results state={this.state} handleState={this.handleState} />}
                <Movie state={this.state} handleState={this.handleState} />
            </div>
        )
    }
}

export default App
