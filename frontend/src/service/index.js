import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const getProduct = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/product`)
      .then((res) => {
        return resolve(res.data.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const updateProductById = async (form, id) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${API_URL}/product/${id}`, form)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const getProductId = async (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/product/${id}`)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const deleteProduct = async (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL}/product/${id}`)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((error) => {
        return reject(error.response.data);
      });
  });
};
