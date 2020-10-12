import fs from "fs";
export const handleFile = async (file: any) => {
  return new Promise((resolve, reject) => {
    const path = "./public/images/product/";
    fs.writeFile(path + file.hapi.filename, file._data, (err) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(path + file.hapi.filename);
    });
  });
};
