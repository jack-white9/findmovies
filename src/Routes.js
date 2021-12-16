import { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Results from './components/Results'
import Movie from './components/Movie'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/results' element={<Results />} />
                    <Route exact path='/movie' element={<Movie />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Routes;