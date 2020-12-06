import { observable, computed, action, configure, runInAction } from "mobx";
configure({
  enforceActions: "observed",
});
class Store {
  @observable price = 1;
  @observable amount = 2;
  @observable products = [];
  @observable state = "";
  @observable apiData = "";

  @computed get total() {
    return this.price + this.amount;
  }

  @action("递增price") changePrice = () => {
    this.price++;
  };

  @action("获取产品列表") getProductList = () => {
    this.state = "pendding";
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["香蕉"]);
      }, 1000);
    })
      .then((products) => {
        runInAction(() => {
          this.products = products;
          this.state = "done";
        });
      })
      .catch((e) => {
        console.info(e);
        runInAction(() => {
          this.state = "error";
        });
      });
  };
  @action("增加产品") addProduct = (prop) => {
    this.products.push(prop);
  };
  @action("清空产品") clearProduct = () => {
    this.products = [];
    this.state = "";
  };
  @action("api数据") getDataFromApi = async () => {
    const data = await Promise.resolve("the data is accepted from api");
    runInAction(() => {
      this.apiData = data;
    });
  };
}

const myFirstStore = new Store();
export default myFirstStore;
