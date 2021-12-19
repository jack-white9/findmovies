import React, {Component} from 'react'

class ResultTile extends Component {
    render() {
        return (
            <div className="results__grid--container">
                <img 
                    src={'http://image.tmdb.org/t/p/w500' + this.props.poster} 
                    alt={this.props.title + ' movie poster'} 
                    onClick={() => this.props.handleClick(this.props.id)}
                    className="results__grid--img"
                />
                <p onClick={() => this.props.handleClick(this.props.id)} className="results__grid--text">{this.props.title}</p>
            </div>
        )
    }
}

export default ResultTile
