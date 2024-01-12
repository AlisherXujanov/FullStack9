import './style.scss'
import { Outlet } from 'react-router-dom'
import Nav from "./Nav.jsx"

function Navigation() {
    return (
        <>
            <header>
                <Nav />
            </header>

            <Outlet />
            
            <footer>
                <h2>Footer</h2>
            </footer>
        </>
    );
}

export default Navigation;