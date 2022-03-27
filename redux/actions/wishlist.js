import http from "../../helpers/http"
import qs from 'qs'

export const addToWishlist = async (dispatch, dataWish) => {
    // return async (dispatch) => {
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            const token = window.localStorage.getItem('token')
            const { data } = await http(token).post('/wishlist', qs.stringify(dataWish))
            console.log(data)
            dispatch({type: 'ADD_WISHLIST', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e){
            console.log(e)
        }
    // }
}

export const checkWishlist = async (dispatch, id) => {
    try {
        dispatch({type: 'TOGGLE_LOADING'})
        const token = window.localStorage.getItem('token')
        const {data} = await http(token).get(`/wishlist/user-and-product/${id}`)
        dispatch({type: 'CHECK_WISHLIST', payload: data.result})
        dispatch({type: 'TOGGLE_LOADING'})
    } catch (e){
        console.log(e)
    }
}