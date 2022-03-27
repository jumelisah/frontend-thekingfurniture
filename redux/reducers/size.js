const dataSize = {
    data: []
}

const size = (state = dataSize, action) => {
    switch (action.type) {        
        case 'GET_SIZE': {
            const data = action.payload
            state.data = data
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default size