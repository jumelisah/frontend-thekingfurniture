const initialState = {
    isLoading: false,
}

const pages = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            let {isLoading} = state
            isLoading = !isLoading
            return {...state, isLoading}
        default:
            return {...state}
    }
}

export default pages