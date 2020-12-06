import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Mobx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
  }
  // 这个生命周期不再被支持
  // componentWillReact() {
  //   console.info("mobx数据发生变更了");
  // }
  render() {
    const {
      price,
      amount,
      total,
      changePrice,
      products,
      getProductList,
      addProduct,
      clearProduct,
      state,
      getDataFromApi,
      apiData,
    } = this.props.store;
    return (
      <div>
        <h1>mobx study</h1>
        <h2>state初始值</h2>
        <p>price:{price}</p>
        <p>amount:{amount}</p>
        <h2>computed计算值</h2>
        <p>computed:{total}</p>
        <h2>action修改state</h2>
        <button onClick={() => changePrice()}>changePrice</button>
        <h2>action内部的异步操作(promise)</h2>
        <span>{state}</span>
        <button onClick={() => getProductList()}>获取产品</button>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => addProduct(this.inputRef.current.value)}>
          新增产品
        </button>
        <button onClick={() => clearProduct()}>清空产品</button>
        <ul>
          {products.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2>action内部有异步操作(async,await)</h2>
        <button onClick={() => getDataFromApi()}>接口获取数据</button>
        <p>{apiData}</p>
      </div>
    );
  }
}

export default Mobx;
