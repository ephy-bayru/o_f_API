import express from 'express';
import { ProductsController } from './products.controllers';
import { ProductService } from '../services/products.service';

const router = express.Router();
const productService = new ProductService();
const productsController = new ProductsController(productService);

router.get('/', async (req, res) => {
  if (req.query.query) {
    await productsController.searchProducts(req, res);
  } else {
    await productsController.getProducts(req, res);
  }
});

router.get('/:id', async (req, res) => {
  await productsController.getProductById(req, res);
});

router.post('/', async (req, res) => {
  await productsController.createProduct(req, res);
});

router.put('/:id', async (req, res) => {
  await productsController.updateProductById(req, res);
});

router.delete('/:id', async (req, res) => {
  await productsController.deleteProductById(req, res);
});

export default router;
