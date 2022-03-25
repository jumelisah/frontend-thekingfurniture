import http from "../../helpers/http"

export const getProducts = async(dispatch) => {
    dispatch({
        type: 'SET_LOADING'
    })
    const {data} = await http().get('/product')
    console.log(data)
    dispatch({
        type: 'GET_PRODUCTS',
        payload: data.result
    })
    dispatch({
        type: 'SET_LOADING'
    })
}
