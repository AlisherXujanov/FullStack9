import BagImg from "../../assets/icons/bag.png"
import DiamondImg from "../../assets/icons/diamond.png"
import GraphImg from "../../assets/icons/graph.png"
import HandShakeImg from "../../assets/icons/handShake.png"
import ValuesItem from "./ValueItem.jsx"
import ValuesJson from "../../db/values.json"

function Values(props) {
    const images = [DiamondImg, GraphImg, BagImg, HandShakeImg]

    return (
        <div className="values-content">
            { 
                ValuesJson && ValuesJson.map((item, index) => {
                    return (
                        <ValuesItem 
                            key={index}
                            image={images[index]}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    )
                })
            }
        </div>
    );
}

export default Values;