import './style.scss'
// import { createContext, useContext } from 'react'

function C1(props) {
    return (
        <>
            <h3>C1</h3>
            <C2 info={props.info}/>
        </>
    );
}
function C2(props) {
    return (
        <>
            <h3>C2</h3>
            <C3 info={props.info}/>
        </>
    );
}
function C3(props) {
    return (
        <>
            <h3>C3</h3>
            <p><mark>{props.info}</mark></p>
        </>
    );
}



function Products(props) {
    const info = "Hello world"

    return (
        <div id="products-wrapper">
            <h2>Products</h2>

            <C1 info={info} />
        </div>
    );
}

export default Products;
