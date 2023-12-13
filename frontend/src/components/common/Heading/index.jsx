import "./style.scss"
import HeadingVector from "../../../assets/icons/headingVector.png"

function Heading(props) {
    const fontSize = {
        fontSize: `calc(48px / ${props.size})`,
    }
    const imgStyle = {
        filter: props.filtered ? 'grayscale(100%)' : 'none'
    }

    return (
        <div className="heading-wrapper">
            <h2 style={fontSize}>
                <img 
                    style={imgStyle}
                    src={HeadingVector} 
                    alt="Vector"
                />
                {props.children}
            </h2>
        </div>
    );
}

export default Heading;