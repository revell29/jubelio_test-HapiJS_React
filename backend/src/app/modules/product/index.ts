import { Request, ResponseToolkit, ResponseObject } from "hapi";

class ProductController {
  async index(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      let dataProduct: {
        productName: string;
        price: number;
        description: string;
      } = {
        productName: "Samsung A50s",
        price: 32000000,
        description: "Hp mahal ini",
      };

      return h.response({ data: dataProduct }).code(200);
    } catch (error) {
      return h.response(error).code(500);
    }
  }
}

export default new ProductController();
