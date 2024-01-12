import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <nav>
            <div className="left">
                <h2>Fonte</h2>
            </div>
            <div className="middle">
                <Link to={"/about"}>About</Link>
                <Link to={"/team"}>Team</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/contacts"}>Contacts</Link>
            </div>
            <div className="right">
                <button className='warning-btn'>Войти</button>
                <span id='lang-toggler'>
                    Рус
                </span>
            </div>
        </nav>
    );
}

export default Nav;