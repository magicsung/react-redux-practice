import React, {Component} from 'react';
import { connect } from 'react-redux'
import { totalPriceCount } from '../actions/totalPriceCountActions';
import { productCount } from '../actions/productCountActions';
import ProductItem from './productItem';


class ProductList extends Component {
  // 4. 將收到的變更往外傳
  handleChange(index, newQty) {
    const { dispatch } = this.props;
    const { totalPriceCounter } = this.props;
    dispatch(productCount(index, newQty));
    dispatch(totalPriceCount(totalPriceCounter.productList));
  }

  render() {
    const { totalPriceCounter } = this.props;

    let productItemList = totalPriceCounter.productList.map((product, index) => {
    // 3. 處理 productItem 的 onChange 事件，並額外帶入 index
    return <ProductItem key={ index } {...product}
                        onChange={this.handleChange.bind(this, index)} />
    }, this);

    return (
      <div>
        { productItemList }

        <div>總金額： { totalPriceCounter.totalPriceCount }</div>
      </div>
    );
  }

}

// 3. 使用 Connect 連接 React 和 Redux
function mapStateToProps(state) {
  return {
    totalPriceCounter: state.totalPriceCounter
  };
}
export default connect(mapStateToProps)(ProductList);
