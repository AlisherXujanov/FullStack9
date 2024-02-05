import './style.scss'
import { context } from '../../store'
import { useContext, useEffect } from 'react'

const URL = 'https://official-joke-api.appspot.com/random_joke'

function Products(props) {
    const { store, setStore } = useContext(context)

    useEffect(() => {
        fetchJoke()
    }, [])

    async function fetchJoke() {
        // fetch(URL)
            // .then(res => res.json())
            // .then(data => setStore({ type: 'setJoke', payload: data }))
        const respone = await fetch(URL)
        setStore({ type:'setJoke',   payload: await respone.json()})
    }

    const punchlineStyle = {
        color: 'green',
        textAlign: 'right'
    }

    return (
        <div id="products-wrapper">
            <h2>Products</h2>
            <div className="container">
                <h3>{store.counter}</h3>
                <button className="warning-btn"
                    onClick={() => setStore({ type: 'increment' })}
                >
                    Increment
                </button>
            </div>

            <div className="container">
                <button className="warning-btn" onClick={fetchJoke}>
                    Get New Joke
                </button>
                <br />
                <br />
                <h3>{store.joke.setup}</h3>
                <h3 style={punchlineStyle}>{store.joke.punchline}</h3>
            </div>
        </div>
    );
}

export default Products;
