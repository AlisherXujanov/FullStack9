import "./footer.scss"
import Heading from "../common/Heading"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer-wrapper">
            <div>
                <Heading size={2} filtered={true}>
                    <span style={{color:"darkgray"}}>Fonte</span>
                </Heading>
            </div>
            <div className="links">
                <div>
                    <Link to="/about">О Нас</Link>
                    <Link to="/teams">Команда</Link>
                    <Link to="/blog">Блог</Link>
                    <Link to="/products">Продукты</Link>
                    <Link to="/contacts">Контакты</Link>
                </div>
                <div>
                    <Link to="/contacts">Terms and conditions</Link>
                    <Link to="/contacts">Privacy policy</Link>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Footer;

