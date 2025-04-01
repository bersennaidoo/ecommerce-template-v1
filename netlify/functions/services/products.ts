import { prisma } from '../db/prisma';
import { Product } from '../models/Product';

const createProduct = async (product: any) => {
  try {
    const createdProduct: any = await prisma.product.create({ data: product });
    return createdProduct;
  } catch (error) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
};

const getProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    throw new Error(`Failed to retrieve products: ${error.message}`);
  }
};

const getProduct = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new Error(`Product not found`);
    }
    return product;
  } catch (error) {
    throw new Error(`Failed to retrieve product: ${error.message}`);
  }
};

const updateProduct = async (id: string, product: any) => {
  try {
    const updatedProduct = await prisma.product.update({ where: { id }, data: product });
    return updatedProduct;
  } catch (error) {
    throw new Error(`Failed to update product: ${error.message}`);
  }
};

const deleteProduct = async (id: string) => {
  try {
    await prisma.product.delete({ where: { id } });
  } catch (error) {
    throw new Error(`Failed to delete product: ${error.message}`);
  }
};

export { createProduct, getProducts, getProduct, updateProduct, deleteProduct };