const initialState = {
  data: [],
  subtotal: 0,
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      const data = action.payload
      state.data = data
      window.localStorage.setItem('tkfCart', JSON.stringify(state.data))
      return { ...state }
    }
    case 'GET_CART': {
      const data = action.payload
      state.data = data
      if(!Array.isArray(data)){
        state.data = [data]
      }
      return { ...state }
    }
    case 'CHECKOUT_CART': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    case 'REMOVE_CART': {
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