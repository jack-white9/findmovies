import React, {Component} from 'react'

class Landing extends Component {
    render() {
        return (
            <div>
                <h1>FindMovies</h1>
                <input
                    type="text"
                    placeholder="Search"
                    name="search"
                />
                <button>Search</button>
            </div>
        )
    }
}

export default Landing
