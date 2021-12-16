import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Results from './components/Results/Results'
import Movie from './components/Movie/Movie'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Landing />} />
                <Route exact path='/movie' element={<Movie />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;