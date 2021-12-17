import React, {Component} from 'react'

class Result extends Component {
    render() {
        const [poster, title] = [this.props.poster, this.props.title]
        return (
            <div>
                <img src={'http://image.tmdb.org/t/p/w500' + poster} alt={title + ' movie poster'}></img>
                <p>{title}</p>
            </div>
        )
    }
}

export default Result
