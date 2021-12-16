import React, {Component} from 'react'

class Search extends Component {
    constructor() {
        super()
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert(this.state.value)
        event.preventDefault();
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
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search
