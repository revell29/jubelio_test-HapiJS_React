import axios from "axios";
import * as convert from "xml2json";
export const getDataProduct = async () => {
  return new Promise((resolve, reject) => {
    const url = "http://api.elevenia.co.id/rest/prodservices/product/listing";
    axios
      .get(url, {
        headers: {
          openapikey: "721407f393e84a28593374cc2b347a98",
        },
      })
      .then(async (response) => {
        let json = convert.toJson(response.data);
        let ob = JSON.parse(json).Products.product;
        return resolve(ob);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};
