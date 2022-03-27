const dataColor = {
    data: [],
}

const color = (state = dataColor, action) => {
    switch (action.type) {        
        case 'GET_COLOR': {
            const data = action.payload
            state.data = data
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default color