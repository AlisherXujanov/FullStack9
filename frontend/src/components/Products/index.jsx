import './style.scss'
import Spinner from "../common/Spinner"
import { context } from '../../store'
import { useContext, useEffect } from 'react'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import Test from "./Test.jsx"

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
        setStore({ type: 'setJoke', payload: await respone.json() })
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

            <div className="container">
                <Get url={URL} params={{}}>
                    {(error, response, isLoading, makeRequest, axios) => {
                        if (error) {
                            return (
                                <div>
                                    Something bad happened: {error.message}
                                    <button className='warning-btn'
                                        onClick={() => makeRequest({ params: { reload: true } })}
                                    >
                                        Retry
                                    </button>
                                </div>
                            )
                        }
                        else if (isLoading) {
                            return (
                                <div>
                                    <Spinner />
                                </div>
                            )
                        }
                        else if (response !== null) {
                            return (
                                <div>
                                    <h3>{response.data.setup}</h3>
                                    <h3 style={punchlineStyle}>{response.data.punchline}</h3>
                                    <button className='warning-btn' onClick={() => makeRequest({ params: { refresh: true } })}>
                                        Refresh
                                    </button>
                                </div>
                            )
                        }
                        return (<div>Default message before request is made.</div>)
                    }}
                </Get>
            </div>

            <div className="container">
                <Test />
            </div>
        </div>
    );
}

export default Products;
