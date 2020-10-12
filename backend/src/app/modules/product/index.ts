import { Request, ResponseToolkit, ResponseObject } from "hapi";
import {
  getProduct,
  updateProduct,
  getProdyctById,
  deleteProduct,
} from "@repository/ProductRepository";
import { productSchema } from "./validation/ProductValidation";
import { handleFile } from "@utils/handleFile";
class ProductController {
  /**
   * return all product from database
   *
   * @param Request
   * @return ResponseToolkit
   **/
  async index(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const data = await getProduct();
      return h.response({ data: data }).code(200);
    } catch (error) {
      return h.response(error).code(500);
    }
  }

  /**
   * update data product
   *
   * @param Request
   * @return ResponseToolkit
   **/
  async update(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const {
        sku,
        prodName,
        price,
        stock,
        description,
        files,
      }: any = request.payload;

      const result = await productSchema.validateAsync({
        sku: sku,
        prodName: prodName,
        price: price,
        stock: stock,
        description: description,
      });

      // @ts-ignore
      if (files) {
        try {
          const file = await handleFile(files);
          result.image = file;
        } catch (err) {
          console.log(err);
        }
      }

      const newData = await updateProduct(result, request.params.id);

      return h
        .response({ message: "Product has been updated.", data: result })
        .code(200);
    } catch (err) {
      if (err.isJoi && Array.isArray(err.details) && err.details.length > 0) {
        return h.response(err.details).code(422);
      }
      return h.response(err).takeover();
    }
  }

  /**
   * get detail product by id
   *
   * @param Request
   * @return ResponseTollkit
   **/
  async show(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const data = await getProdyctById(request.params.id);
      return h.response({ message: "Success", data: data }).code(200);
    } catch (err) {
      return h.response(err).code(500);
    }
  }

  async delete(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      await deleteProduct(request.params.id);
      return h.response({ message: "Product has been deleted." }).code(200);
    } catch (error) {
      return h.response(error).code(500);
    }
  }
}

export default new ProductController();
