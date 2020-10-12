import { Request, ResponseToolkit, ResponseObject } from "hapi";
import { getDataProduct } from "./service/getData";
import { insertProduct } from "@repository/ProductRepository";

class EleveniaControlelr {
  async index(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      let resData: any = [];
      let data: any = await getDataProduct();
      data.map((value: any) => {
        resData.push({
          sku: value.prdNo,
          prodName: value.prdNm,
          image: "-",
          price: value.selPrc,
          stock: value.stock,
        });
      });

      await insertProduct(resData);
      return h.response({ message: "Data has been imported" }).code(200);
    } catch (error) {
      console.log(error);
      return h.response(error).code(500);
    }
  }
}

export default new EleveniaControlelr();
