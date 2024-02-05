import { createContext } from 'react'
import { globalReducer } from './helpers'

const context = createContext()

const initialState = {
    lang: 'en',
    counter: 0,
    joke: {}
}

export {
    context, 
    initialState,
    globalReducer
}