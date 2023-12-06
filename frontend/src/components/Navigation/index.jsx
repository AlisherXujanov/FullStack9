import { Link, Outlet } from 'react-router-dom';
import './styles.scss'

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
                    <a href="#Блог">Блог</a>
                    <a href="#Продукты">Продукты</a>
                    <a href="#Контакты">Контакты</a>
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