import './styles.scss'

function Navigation() {
    return (
        <div id="navbar-wrapper">
            <div className="logo">
                <h2>Fonte</h2>
            </div>
            <div className="nav-links">
                <a href="#Мы">О нас</a>
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
    );
}

export default Navigation;