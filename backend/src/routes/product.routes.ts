import ProductController from "../app/modules/product";

export default [
  {
    path: "/product",
    method: "GET",
    handler: ProductController.index,
  },
];
