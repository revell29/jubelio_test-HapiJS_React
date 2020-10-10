import { Request, ResponseToolkit, ResponseObject } from "hapi";
import { getDataProduct } from "./service/getData";

class EleveniaControlelr {
  async index(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const data: any = await getDataProduct();
      return h.response(data).code(200);
    } catch (error) {
      console.log(error);
      return h.response(error).code(500);
    }
  }
}

export default new EleveniaControlelr();
