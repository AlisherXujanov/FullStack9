import "./style.scss"
import Heading from "../common/Heading"
import Blog1 from "../../assets/images/blog-1.png"
import Blog2 from "../../assets/images/blog-2.png"
import Blog3 from "../../assets/images/blog-3.png"

function Blog(props) {
    return (
        <div id="blog-wrapper">
            <Heading size={2}>Blog</Heading>

            <div className="content">
                <div className="left">
                    <img src={Blog1} alt="Blog" width={"100%"}  height={400} />
                </div>
                <div className="right">
                    <h4>Менеджемент</h4>
                    <h2>Минфин предложил единый налоговый вычет</h2>
                    <h4>Арман Арманов, Октябрь 13, 2022</h4>
                    <p>Минфин разработал новый формат индивидуальных инвестиционных счетов (ИИС-III) — его включат в систему единого налогового вычета наряду с пенсионными и страховыми инвестициями. С 2024 года ИИС-III полностью заменит ИИС-I, запущенный в 2015 году. Новый инвестсчет будет неинтересен для инвесторов в предложенной </p>
                    <button className="warning-btn">
                        Подробнее 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Blog;