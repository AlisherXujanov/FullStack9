function globalReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + 1 }
        case 'decrement':
            return { ...state, counter: state.counter - 1 }
        case "setJoke":
            return { ...state,   joke:action.payload }
        default:
            return state
    }
}


export {
    globalReducer
}