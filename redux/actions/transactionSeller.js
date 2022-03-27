import http from '../../helpers/http'

export const getTransactionSeller = (token) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            const {data} = await http(token).get('/transaction/seller')
            dispatch({type: 'GET_TRANSACTION_SELLER', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e){
            console.log(e)
        }
    }
}