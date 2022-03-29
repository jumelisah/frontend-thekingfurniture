const dataProduct = {
    data: []
}

const product = (state = dataProduct, action) => {
    switch (action.type) {        
        case 'GET_PRODUCT': {
            const data = action.payload
            state.data = data
            // if(!Array.isArray(data)){
            //     state.data = [data]
            // }
            return {...state }
        }
        case 'DELETE_PRODUCT': {
            const data = action.payload
            state.data = data
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default product