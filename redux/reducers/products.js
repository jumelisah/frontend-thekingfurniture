const initialState = {
    data: []
}

const products = (state=initialState, action) => {
  switch(action.type){
    
    case 'GET_PRODUCTS': {
      const data = action.payload
      state.data = data
      return {...state}
    }
    default: {
        return {...state}
    }
  }
}

export default products