const dataTransactionSeller = {
    data: []
}

const transactionSeller = (state = dataTransactionSeller, action) => {
    switch (action.type) {        
        case 'GET_TRANSACTION_SELLER': {
            const data = action.payload
            state.data = data
            return {...state }
        }
        case 'DELETE_TRANSACTION_SELLER': {
            const data = action.payload
            state.data = data
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default transactionSeller