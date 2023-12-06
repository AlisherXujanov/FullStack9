import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'
import About from '../components/About'
import NoPage from './NoPage'
import Home from './Home'
import Blog from './Blog'

function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;