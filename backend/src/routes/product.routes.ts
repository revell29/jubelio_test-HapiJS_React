import ProductController from "@modules/product";
import { errorHandler } from "../server/utils/errorHandler";

export default [
  {
    path: "/product",
    method: "GET",
    handler: ProductController.index,
  },
  {
    path: "/product/{id}",
    method: "GET",
    handler: ProductController.show,
  },
  {
    path: "/product/{id}",
    method: "DELETE",
    handler: ProductController.delete,
  },
  {
    path: "/product/{id}",
    method: "PUT",
    handler: ProductController.update,
    options: {
      payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        multipart: true, // <-- this fixed the media type error
      },
      validate: {
        failAction: errorHandler,
      },
    },
  },
];
