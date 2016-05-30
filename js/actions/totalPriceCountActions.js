// 1. 增加計算總金額的 Action

export function totalPriceCount(productList) {
    let countTotalPrice = 0;
    productList.map((product) => {
      countTotalPrice += (product.price * product.qty);
    }, this);

    return {
      type: 'TOTAL_PRICE_COUNT',
      totalPrice: countTotalPrice
    }
}
