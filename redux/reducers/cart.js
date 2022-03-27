const initialState = {
  data: [],
  subtotal: 0,
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      const data = action.payload
      state.data = data
      state.subtotal += data.data.total_price
      return { ...state }
    }
    case 'GET_CART': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    case 'CHECKOUT_CART': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default cart