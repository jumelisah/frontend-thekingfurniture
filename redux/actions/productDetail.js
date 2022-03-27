import http from '../../helpers/http'

export const getProductDetail = async (dispatch, id) => {
  try {
    console.log('a')
    dispatch({ type: 'TOGGLE_LOADING' })
    const { data } = await http().get(`/product/${id}`)
    console.log(data)
    dispatch({
      type: 'GET_PRODUCT_DETAIL',
      payload: data.result
    })
    dispatch({ type: 'TOGGLE_LOADING' })
  } catch (e) {
    console.log(e)
  }
}