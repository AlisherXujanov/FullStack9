import './style.scss'
import { Outlet, Link } from 'react-router-dom'

function Navigation() {
    return (
        <>
            <h3>Navigation</h3>
            
            <Outlet />
        </>
    );
}

export default Navigation;