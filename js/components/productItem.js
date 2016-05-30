import React, { Component } from 'react';
import { connect } from 'react-redux'

class ProductItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
      var isModified = (this.props.qty !== nextProps.qty);
      return isModified;
    }

    constructor(props){
        super();
    }

    // 2. 新增 handleChange 方法，將變更的 qty 交給外層 Component
    handleChange(event){
      let newQty = parseInt(event.target.value);
      this.props.onChange(newQty);
    }

    render() {
        return (
            <div>
                <img src={ this.props.url } alt="Product Image" />
                <p>{ this.props.name }</p>
                <p>{ this.props.price }</p>
                <p>
                    { /* 1. 修改為 input 並處理 onChange  */ }
                    <input type="number" value={ this.props.qty } onChange={this.handleChange.bind(this)} />
                    小計： { this.props.qty * this.props.price }
                </p>
            </div>
        );
    }
}


ProductItem.propTypes = {
    url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    qty: React.PropTypes.number.isRequired
}


export default ProductItem;
