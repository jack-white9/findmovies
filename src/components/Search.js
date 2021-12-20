import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.min.css'

class Search extends Component {
    constructor() {
        super()
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        this.props.handleState(this.state.value, '', '', '')
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            type="text" 
                            value={this.state.value} 
                            onChange={this.handleChange} 
                            className="landing__search--bar"
                        />
                    </label>
                    <button 
                        type="submit" 
                        value="Search" 
                        className="landing__search--button"
                    ><i className="fa fa-search fa-2x"/></button>
                </form>
            </div>
        )
    }
}

export default Search
