const dataProduct = {
    data: [],
    pageInfo: {}
}

const product = (state = dataProduct, action) => {
    switch (action.type) {        
        case 'GET_PRODUCT': {
            const data = action.payload
            state.data = data.result
            // if(!Array.isArray(data)){
            //     state.data = [data]
            // }
            state.pageInfo = data.pageinfo
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