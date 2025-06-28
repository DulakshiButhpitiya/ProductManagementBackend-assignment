import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
import uploads from '../utils/multer.js'; // Import multer configuration for image upload

const router = express.Router();

// POST - Create product with image
router.post("/", uploads.single("image"),createProduct);

// GET all products
router.get('/', getProducts);

// GET one product
router.get('/:id', getProductById);

// PUT - Update product (optional image upload)
router.put('/:id', uploads.single("image"), updateProduct); // make sure to use multer here too

// DELETE
router.delete('/:id', deleteProduct);

export default router;
