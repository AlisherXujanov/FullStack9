import './style.scss'
import { createContext, useContext } from 'react'

const context = createContext()


function C1() {
    return (
        <>
            <h3>C1</h3>
            <C2 />
        </>
    );
}
function C2() {
    return (
        <>
            <h3>C2</h3>
            <C3 />
        </>
    );
}
function C3() {
    const info = useContext(context)

    return (
        <>
            <h3>C3</h3>
            <p>
                <mark>{info}</mark>
            </p>
        </>
    );
}



function Products(props) {
    const info = "Hello world"

    return (
        <context.Provider value={info}>
            <div id="products-wrapper">
                <h2>Products</h2>

                <C1 />
            </div>
        </context.Provider>
    );
}

export default Products;
