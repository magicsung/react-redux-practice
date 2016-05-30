import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ProductList from './components/productList';
import totalPriceCounter from './reducers'



let store = createStore(totalPriceCounter);

// function updateProductList(index, newQty) {
//     productList = [
//         ...productList.slice(0, index),
//         Object.assign({}, productList[index], {
//             qty: newQty
//         }),
//         ...productList.slice(index + 1)
//     ];
//
//     ReactDOM.render(
//       <Provider store={store}>
//         <ProductList productList={ productList } onChange={ updateProductList } />
//       </Provider>
//       , document.getElementById('content')
//     );
// }

// 5. 撰寫處理 Product Qty 變更的方法，並綁定變更到 Components 上
ReactDOM.render(
  <Provider store={store}>
    <ProductList />
  </Provider>
  , document.getElementById('content')
);
