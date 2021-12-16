import React, {Component} from 'react'
import Result from './Result'

class ResultsUI extends Component {
    render() {
        let ResultComponents
        const results = this.props.results.results

        if (results) {
            ResultComponents = this.props.results.results.map(result => <Result id={result.id} backdrop={result.backdrop_path} title={result.original_title} />)
        }
        
        return (
            <div>
                {results ? ResultComponents : null}
            </div>
        )
    }
}

export default ResultsUI
