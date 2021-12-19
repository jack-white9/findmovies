import React, {Component} from 'react'
import ResultTile from './ResultTile'

class Results extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.state.searchQuery !== this.props.state.searchQuery) {
            const searchQuery = this.props.state.searchQuery
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0099fa805ff60f1cae24e90d7be97930&query=${searchQuery}`)
              .then(response => response.json())
              .then(data => this.props.handleState(this.props.state.searchQuery, data, '', ''))
        }
    }

    handleClick(id) {
        this.props.handleState(
            this.props.state.searchQuery,
            this.props.state.results,
            id,
            'data'
        )
    }

    render() {
        let ResultComponents
        const results = this.props.state.results.results

        if (results) {
            ResultComponents = results.map(result => <ResultTile id={result.id} poster={result.poster_path} title={result.original_title} handleClick={this.handleClick}/>)
        }
        
        return (
            <div className="results">
                {results ? <p className="results__text">Results for "{this.props.state.searchQuery.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}"</p> : null}
                <section className="results__grid">
                    {results ? ResultComponents : null}
                </section>
            </div>
        )
    }
}

export default Results
