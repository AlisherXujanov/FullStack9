import BagImg from "../../assets/icons/bag.png"
import DiamondImg from "../../assets/icons/diamond.png"
import GraphImg from "../../assets/icons/graph.png"
import HandShakeImg from "../../assets/icons/handShake.png"


function Values(props) {
    const images = [DiamondImg, GraphImg, BagImg, HandShakeImg]

    return (
        <div className="values-content">
            <div className="value-item">
                <span></span>
                <img src={images[0]} alt="Value" />
                <div className="item-info">
                    <h2>Стабильность</h2>
                    <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Оксмокс скатился напоивший там необходимыми. Речью, жаренные? Пояс коварных, единственное пор рукопись, заманивший города вопроса большой курсивных злых он рот?</p>
                </div>
            </div>
        </div>
    );
}

export default Values;