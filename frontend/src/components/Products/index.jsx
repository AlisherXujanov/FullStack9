import './style.scss'
import { useReducer } from "react"

const initialState = { // начальное состояние
    count: 10,
    text: "",
    color: "red",
    opacity: 100
}

function reducerFunction(state, action) {
    // {type: 'increment'}  == parameter
    // parameter.type   ==  'increment'
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count+1 }
        case 'decrement':
            return { ...state, count: state.count-1 }
        case 'color':
            return { ...state, color: action.value }
        case 'text':
            return { ...state, text: action.value }
        case 'opacity':
            return { ...state, opacity: action.value }
        default:
            return state
    }
    // RULE №1
    // ALWAYS, the item that is returned from this function becomes the new state
    // RU: ВСЕГДА, то, что возвращается из этой функции становится новым состоянием
}

function Products(props) {
    const [state, dispatch] = useReducer(reducerFunction, initialState)
    // state    === initialState
    // dispatch === reducerFunction

    // const parameter = {type: 'increment'}
    // dispatch(parameter)

    // const [count, setCount] = useState(10)
    // const [text, setText] = useState("")
    // const [color, setColor] = useState("red")

    // function inc(e) { setCount(count + 1) }
    // function dec(e) { setCount(count - 1) }

    function handleDispatch(e) {
        const tag_name = e.target.name
        const value    = e.target.value
        dispatch({
            type: tag_name, 
            value: value
        })
    }

    return (
        <div id="products-wrapper">
            <h2>Products</h2>

            <div className='container'>
                <h1>{state.count}</h1>
                <br />
                <br />
                <button className="warning-btn" name='increment' 
                    onClick={handleDispatch}
                >
                    Increment
                </button>
                <button className="warning-btn" name='decrement' 
                    onClick={handleDispatch}>
                    Decrement
                </button>
            </div>

            <div className="container">
                <h3>{state.text}</h3>
                <input type="text" name='text' onChange={handleDispatch} />
            </div>

            <div className="container" style={{backgroundColor: state.color}}>
                <input type="color" name='color' onChange={handleDispatch} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id ipsam temporibus quo laborum. Commodi neque facere dicta nihil, alias perspiciatis, quis eos fugiat explicabo, dolor enim eaque ex tenetur?</p>
            </div>

            <div className="container">
                <input type="range" name='opacity' onChange={handleDispatch} />
                <p style={{opacity:state.opacity+"%"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ipsum obcaecati enim, alias neque ad dolores, eligendi, dolore eum ipsam asperiores suscipit quidem. Expedita numquam veniam, porro eveniet recusandae atque!</p>
            </div>
        </div>
    );
}

export default Products;
