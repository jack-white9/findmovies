import React, {Component} from 'react'

class Result extends Component {
    render() {
        const [backdrop, title] = [this.props.backdrop, this.props.title]
        return (
            <div>
                <img src={'http://image.tmdb.org/t/p/w500' + backdrop} alt={title + ' movie poster'}></img>
                <p>{title}</p>
            </div>
        )
    }
}

export default Result
