import {Component} from 'react'

class FetchMovie extends Component {
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/550?api_key=0099fa805ff60f1cae24e90d7be97930')
          .then(response => response.json())
          .then(data => this.props.handleState(false, data))
      }

      render() {
          return null
      }
}

export default FetchMovie
