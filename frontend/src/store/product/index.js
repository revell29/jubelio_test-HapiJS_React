import { action, observable, makeAutoObservable } from "mobx";
import {
  getProduct,
  getProductId,
  updateProductById,
  deleteProduct,
} from "../../service";

class ProductStore {
  data = [];
  detail = {
    sku: "",
    prodName: "",
    price: "",
    stock: "",
    description: "",
  };
  isLoading = true;
  error = "";

  constructor() {
    makeAutoObservable(this, {
      data: observable,
      fetchData: action,
      fetchById: action,
      detail: observable,
      updateProduct: action,
      setErrorAction: action,
      removeProduct: action,
      setFormData: action,
      error: observable,
    });
    // autorun(() => );
    this.fetchData();
  }

  setErrorAction(message) {
    this.error = message;
  }

  setFormData(key, value) {
    this.detail[key] = value;
  }

  async fetchData() {
    this.isLoading = true;
    await getProduct().then((res) => {
      this.data = res;
      this.isLoading = false;
    });
  }

  async fetchById(id) {
    this.isLoading = true;
    await getProductId(id).then((res) => {
      this.detail = res.data;
      this.isLoading = false;
    });
  }

  async updateProduct(newData, id) {
    try {
      this.isLoading = true;
      await updateProductById(newData, id);
      const index = this.data.findIndex((h) => h.id === newData.id);
      this.data[index] = newData;
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      this.setErrorAction(error.response.data.message);
    }
  }

  async removeProduct(id) {
    try {
      this.isLoading = true;
      await deleteProduct(id);
      this.data = this.data.filter((item) => item.id !== id);
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      this.setErrorAction(error.message);
    }
  }
}
export default ProductStore;
