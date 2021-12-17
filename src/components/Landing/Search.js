import React, {Component} from 'react'
import Results from '../Results/Results'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            searchQuery: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value, searchQuery: this.state.searchQuery})
    }

    handleSubmit(event) {
        this.setState(prevState => ({value: this.state.value, searchQuery: prevState.value}))
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>FindMovies</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Search"></input>
                </form>

                {this.state.searchQuery ? <Results searchQuery={this.state.searchQuery} /> : null}
            </div>
        )
    }
}

export default Search
