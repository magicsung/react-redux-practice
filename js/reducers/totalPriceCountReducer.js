const initialState = {
    totalPriceCount: 0,
    productList: [
    {
      url: 'http://placehold.it/100x70',
      name: 'Product 1',
      price: 100,
      qty: 2
    },
    {
      url: 'http://placehold.it/100x70',
      name: 'Product 2',
      price: 150,
      qty: 1
    },
    {
      url: 'http://placehold.it/100x70',
      name: 'Product 3',
      price: 300,
      qty: 5
    }
  ]
}

export function totalPriceCountReducer(state = initialState, action){
    switch(action.type) {
        // 2. 計算總金額的 Reducer
        case 'TOTAL_PRICE_COUNT':
            return Object.assign({}, state, { totalPriceCount: action.totalPrice });
        case 'PRODUCT_QTY_COUNT':
            // console.log(state);
            let index = action.index;
            let newQty = action.newQty;
            state.productList[index].qty = newQty;
            let newProductList = [];
            newProductList = Object.assign([], state.productList);
            return Object.assign({}, state, { productList: newProductList });
        default:
            return state;
    }
}
