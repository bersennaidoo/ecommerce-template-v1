import express, { Router, Request, Response } from 'express';
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../services/products';
import { Product } from '../models/Product';

export const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const product: Product = req.body;
    const createdProduct = await createProduct(product);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve products' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await getProduct(id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve product' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product: Product = req.body;
    const updatedProduct = await updateProduct(id, product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteProduct(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product' });
  }
});
