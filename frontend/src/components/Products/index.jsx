import './style.scss'
import { useState } from 'react'
// RULES OF HOOKS
// 1. Always import hook from 'react'
// 2. Always call it at the top level of the component
function Products(props) {
    const [counter, setCounter] = useState(0)
    
    return (
        <div id="products-wrapper">
            <h2>{counter}</h2>
            <br />
            {/* 
                function(e) {
                    setCounter(...)
                }
            */}
            <button className='warning-btn' 
                onClick={(e) => {setCounter(counter+2)}}
            >
                Increment
            </button>
            <button className='warning-btn' 
                onClick={(e) => {setCounter(counter-2)}}
            >
                Decrement
            </button>
        </div>
    );
}

export default Products;
