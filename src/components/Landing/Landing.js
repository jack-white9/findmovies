import React, {Component} from 'react'
import LandingUI from './LandingUI'
import Search from './Search'

class Landing extends Component {
    render() {
        return (
            <div>
                <LandingUI />
                <Search />
            </div>
        )
    }
}

export default Landing
