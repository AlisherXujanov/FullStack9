function globalReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + 1 }
        default:
            return state
    }
}


export {
    globalReducer
}