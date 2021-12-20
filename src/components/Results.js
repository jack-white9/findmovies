import React, {Component} from 'react'
import ResultTile from './ResultTile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'


class Results extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.handleEmptyResultsClick = this.handleEmptyResultsClick.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.state.searchQuery !== this.props.state.searchQuery && this.props.state.searchQuery) {
            const searchQuery = this.props.state.searchQuery
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`)
              .then(response => response.json())
              .then(data => this.props.handleState(this.props.state.searchQuery, data, '', ''))
        }
    }

    handleClick(id) {
        this.props.handleState(
            this.props.state.searchQuery,
            this.props.state.results,
            id,
            this.props.state.movieData
        )
    }

    handleEmptyResultsClick() {
        this.props.handleState('', '', '', '')
    }

    render() {
        let ResultComponents
        const results = this.props.state.results.results

        if (results) {
            ResultComponents = results.filter((result) => {
                if (!result.poster_path) {
                    return false
                }
                return true
            }).map((result) => {
                return <ResultTile id={result.id} poster={result.poster_path} title={result.original_title} handleClick={this.handleClick}/>
            })
        }

        return (
            <div className="results">
                {results ? <p className="results__text">Results for "{this.props.state.searchQuery.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}"</p> : null}
                {(() => {
                    if (this.props.state.results.total_results === 0) {
                        return (
                            <section className="results__text--empty">
                                <p className="results__text--empty-text">Sorry, no results were found.</p>
                                <button 
                                    className="results__text--empty-button"
                                    onClick={this.handleEmptyResultsClick}>
                                    <FontAwesomeIcon icon={faAngleLeft}/>
                                    &nbsp;Take me back
                                </button>
                            </section>
                        )   
                    } else {
                        return (
                            <section className="results__grid">
                                {results ? ResultComponents : null}
                            </section>
                        )
                }})()}

            </div>
        )
    }
}

export default Results
