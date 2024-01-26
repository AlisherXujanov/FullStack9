import './style.scss'
import { useState } from "react"


function Products(props) {
    const [count, setCount] = useState(10)

    function inc(e) {  setCount(count+1)  }

    function dec(e) {  setCount(count-1)  }

    return (
        <div id="products-wrapper">
            <h2>Products</h2>

            <h1>{count}</h1>
            <br />
            <br />
            <button className="warning-btn" onClick={inc}>
                Increment
            </button>
            <button className="warning-btn" onClick={dec}>
                Decrement
            </button>
        </div>
    );
}

export default Products;
