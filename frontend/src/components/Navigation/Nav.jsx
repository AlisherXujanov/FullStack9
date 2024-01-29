import Heading from "../common/Heading"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useTranslation } from "react-i18next"


function Nav(props) {
    const navigate = useNavigate()

    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "ru" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    const goToTeamsHash = () => {
        navigate('/about');
        setTimeout(() => {
            const element = document.getElementById('teams');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    return (
        <div className="nav-wrapper">
            <div className="logo">
                <h2>
                    <Link to={"/"}>
                        <Heading size={1.5}>Fonte</Heading>
                    </Link>
                </h2>
            </div>

            <div className="menu">
                <div className="nav-links">
                    <Link to={"/about"}>
                        About
                    </Link>
                    <button onClick={goToTeamsHash}>
                        Team
                    </button>
                    <Link to={"/blog"}>
                        Blog
                    </Link>
                    <Link to={"/products"}>
                        Products
                    </Link>
                    <Link to={"/contacts"}>
                        Contacts
                    </Link>
                </div>

                <div className="auth">
                    <button className="warning-btn">
                        login
                    </button>
                    <span onClick={handleChangeLanguage}>
                        {currentLanguage}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Nav;