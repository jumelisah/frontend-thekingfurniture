const dataProduct = {
  dataProduct: []
}

const productDetail = (state = dataProduct, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_DETAIL': {
      const data = action.payload
      state.data = data
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default productDetail