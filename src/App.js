import React, {Component} from 'react'
import './themes/App.css'
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
                {this.state.results ? 
                    null :
                    <section className="landing">
                        <section>
                            <Landing state={this.state} handleState={this.handleState} />
                            <Search state={this.state} handleState={this.handleState} />
                        </section>
                    </section>
                }
                {this.state.movieData ? null: <Results state={this.state} handleState={this.handleState} />}
                <Movie state={this.state} handleState={this.handleState} />
            </div>
        )
    }
}

export default App
