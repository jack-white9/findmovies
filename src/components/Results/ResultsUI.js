import React, {Component} from 'react'
import Result from './Result'

class ResultsUI extends Component {
    render() {
        let ResultComponents
        const results = this.props.results.results

        if (results) {
            ResultComponents = this.props.results.results.map(result => <Result id={result.id} poster={result.poster_path} title={result.original_title} />)
        }
        
        return (
            <div>
                <p>Results for "{this.props.searchQuery.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}"</p>
                {results ? ResultComponents : null}
            </div>
        )
    }
}

export default ResultsUI
