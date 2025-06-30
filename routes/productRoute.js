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


router.post("/", uploads.single("image"),createProduct);

router.get('/', getProducts);

router.get('/:id', getProductById);

router.put('/:id', uploads.single("image"), updateProduct); // make sure to use multer here too

router.delete('/:id', deleteProduct);

export default router;
