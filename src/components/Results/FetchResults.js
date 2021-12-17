import {Component} from 'react'

class FetchResults extends Component {
    performFetch() {
        const searchQuery = this.props.searchQuery
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0099fa805ff60f1cae24e90d7be97930&query=${searchQuery}`)
          .then(response => response.json())
          .then(data => this.props.handleState(false, data))
    }

    componentDidMount() {
        this.performFetch()
      }

      componentDidUpdate() {
        this.performFetch()
      }

      render() {
          return null
      }
}

export default FetchResults
