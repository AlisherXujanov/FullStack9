import { Link, Outlet } from 'react-router-dom';
import './styles.scss'

// 1. git clone
// 2. cd fullstack9
// 3. code .
// 4. cd frontend 
// 5. npm install 

function Navigation() {
    return (
        <div>
            <div id="navbar-wrapper">
                <div className="logo">
                    <h2>
                        <Link to="/">Fonte</Link>
                    </h2>
                </div>
                <div className="nav-links">
                    <Link to="/about">О нас</Link>
                    <a href="#Команда">Команда</a>
                    <Link to="/blog">Блог</Link>
                    <Link to="/products">Продукты</Link>
                    <Link to="/contacts">Контакты</Link>
                </div>
                <div className="auth-section">
                    <button className="warning-btn">
                        Войти
                    </button>
                    <a href="#ru">Рус</a>
                </div>
            </div>
            
            <div id='outlet'>
                <Outlet />
            </div>
        </div>

    );
}

export default Navigation;