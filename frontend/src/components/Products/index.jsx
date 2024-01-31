import './style.scss'
import { useState } from "react"

function Products(props) {
    const [count, setCount] = useState(10)
    const [text, setText] = useState("")
    const [color, setColor] = useState("red")

    function inc(e) { setCount(count + 1) }
    function dec(e) { setCount(count - 1) }

    return (
        <div id="products-wrapper">
            <h2>Products</h2>

            <div className='container'>
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

            <div className="container">
                <h3>{text}</h3>
                <input type="text" 
                    onChange={(e) => {setText(e.target.value)}} 
                />
            </div>

            <div className="container" style={{backgroundColor: color}}>
                <input type="color" onChange={(e) => setColor(e.target.value)} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id ipsam temporibus quo laborum. Commodi neque facere dicta nihil, alias perspiciatis, quis eos fugiat explicabo, dolor enim eaque ex tenetur?</p>
            </div>
        </div>
    );
}

export default Products;
