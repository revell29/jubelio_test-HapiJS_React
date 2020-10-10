import axios from "axios";
import xmlParser from "xml2json";
export const getDataProduct = async () => {
  return new Promise((resolve, reject) => {
    const url = "http://api.elevenia.co.id/rest/prodservices/product/listing";
    axios
      .get(url, {
        headers: {
          openapikey: "721407f393e84a28593374cc2b347a98",
        },
      })
      .then((response) => {
        const data = xmlParser.toJson(response.data);
        return resolve(data);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};
