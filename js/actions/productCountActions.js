// 增加計算商品數量的 Action

export function productCount(index, newQty) {
    return {
      type: 'PRODUCT_QTY_COUNT',
      index: index,
      newQty: newQty
    }
}
