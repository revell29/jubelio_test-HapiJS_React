import { getRepository, Repository } from "typeorm";
import { MsProduct } from "@database/entities/MsProduct";

export async function getProduct() {
  const productRepository: Repository<MsProduct> = getRepository(MsProduct);
  const data = await productRepository.find({});
  return data;
}

export async function insertProduct(data: MsProduct) {
  const productRepository: Repository<MsProduct> = getRepository(MsProduct);
  await productRepository.save(data);
  return true;
}

export async function getProdyctById(id: any) {
  const productRepository: Repository<MsProduct> = getRepository(MsProduct);
  const data = await productRepository.findOneOrFail({ id: id });

  return data;
}

export async function deleteProduct(id: any) {
  const productRepository: Repository<MsProduct> = getRepository(MsProduct);
  const data = await productRepository.findOneOrFail({ id: id });
  await productRepository.remove(data);
}

export async function updateProduct(data: MsProduct, id: any) {
  const productRepository: Repository<MsProduct> = getRepository(MsProduct);
  const product = await productRepository.findOneOrFail({ id: id });
  product.prodName = data.prodName;
  product.sku = data.sku;
  product.image = data.image;
  product.price = data.price;
  product.descripttion = data.descripttion;
  product.stock = data.stock;

  await productRepository.save(product);
  return product;
}
