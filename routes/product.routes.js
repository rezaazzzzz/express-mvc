import { FindAllProduct,productById,CreateProduct,UpdateProduct,deleteProduct } from "../controller/product.controller";
import express from "express";
import authmiddelware from "../middleware";


const router = express.Router();

router.get('/FindAllProduct',FindAllProduct);
router.get('product/:id',productById);
router.post('create-product',authmiddelware,CreateProduct);
router.patch('/update-Product',authmiddelware,UpdateProduct);
router.delete('/deleteProduct/:id',authmiddelware,deleteProduct)


export default router;

