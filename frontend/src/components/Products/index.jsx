import './style.scss'
import { useState } from 'react'
// RULES OF HOOKS
// 1. Always import hook from 'react'
// 2. Always call it at the top level of the component
function Products(props) {
    const [state, setState] = useState({
        counter: 0,
        color: "red",
        number: 1,
        // ...
    })
    function changeNumber(e) {
        e.preventDefault()
        setState({...state, number: parseInt(e.target.value)})
    }


    function setInc(e) {
        setState({...state, counter: state.counter + state.number})
    }

    const colors = [
        'red', 'green', 'blue', 'yellowgreen', 
        'yellow', 'orange', 'purple', 'pink'
    ]
    const randomIndex = Math.floor(Math.random() * colors.length)
    function setDec(e) {
        setState({
            ...state,
            color: colors[randomIndex],
            counter: state.counter - state.number,
        })
    }

    return (
        <div id="products-wrapper">
            <h2 style={{color: state.color}}>{state.counter}</h2>
            <br />
            {/* 
                function(e) {
                    setCounter(...)
                }
            */}
            <button className='warning-btn' onClick={setDec}>
                Decrement
            </button>
            <button className='warning-btn' onClick={setInc}>
                Increment
            </button>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <h4>Number: {state.number}</h4>
            <input type="range" onChange={changeNumber} min={1} max={10} />
        </div>
    );
}

export default Products;
