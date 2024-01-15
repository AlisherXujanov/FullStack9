import "./style.scss"
import HeadingImg from "./headingVector.png"

function Heading(props) {
    // props = {
    //     children: "..." ,
    //     size: 2,
    // }
    const size = `${48 / props.size}px`
    return (
        <h1 className="heading-component" style={{fontSize: size}}>
            <img src={HeadingImg} alt="Heading" />
            {props.children}
        </h1>
    )
}

export default Heading;