![SkillTree](https://az743039.vo.msecnd.net/assets/img/skilltree_logo.png)

# React.js 新手村一日脫逃術

## 練習Component之間的互動，State 交給最外層控制

1. 修改 ProductItem 的 qty, 改為使用 input, 並處理 onChange 事件

    ```
    <input type="number" value={ this.props.qty }
                        onChange={ this.handleChange.bind(this) } />
    ```
    
1. ProductItem 增加 handleChange 方法，將變更的 qty 交給外面物件處理

    ```
    handleChange(event){
        let newQty = parseInt(event.target.value);
        
        this.props.onChange(newQty);
    }  
    ```    
    
1. ProductList 綁定並處理 ProductItem 的 onChange 事件  

    ```
    let productItemList = this.props.productList.map((product, index) => {
           return <ProductItem key={ index } {...product}
                      onChange={ this.handleChange.bind(this, index) } />
        }, this);
    ```  
    
1. 將 ProductList 的 onChange 事件往外傳，讓最外層處理 Product Qty 的變更

    ```
    handleChange(index, newQty) {
        this.props.onChange(index, newQty);
    }
    ```    
    
1. 在最外層撰寫處理 Product Qty 變更的方法，並綁定到 Components 上

    ```
    function updateProductList(index, newQty) {
        productList = [
            ...productList.slice(0, index),
            Object.assign({}, productList[index], {
                qty: newQty
            }),
            ...productList.slice(index + 1)
        ];        
    
        ReactDOM.render(<ProductList productList={ productList } onChange={ updateProductList } />, document.getElementById('content'));
    }

    ReactDOM.render(<ProductList productList={ productList } onChange={ updateProductList } />, document.getElementById('content'));
    ```    
    
## 進階練習   

1. 練習統計 Product 的總金額                                       