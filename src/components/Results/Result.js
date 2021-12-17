import React, {Component} from 'react'

class Result extends Component {
    render() {
        const [poster, title] = [this.props.poster, this.props.title]
        return (
            <div>
                <img src={'http://image.tmdb.org/t/p/w500' + poster} alt={title + ' movie poster'} onClick={() => this.props.handleClick(this.props.id)}></img>
                <p>{title}</p>
            </div>
        )
    }
}

export default Result
