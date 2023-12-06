import { Routes, Route, useLocation } from 'react-router-dom'
import NoPage from './NoPage'
import Navigation from '../components/Navigation'
import Home from '../components/Home'

function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<Home />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;