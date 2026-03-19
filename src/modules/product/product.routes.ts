import { Router } from "express";
import {
  createProduct,
  getCategoryProducts,
  getProductDetail,
  getProducts,
} from "./product.controller.js";
import multer from "multer";

const productRoutes = Router();
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
productRoutes.post("/add",upload.array('images', 6), createProduct);
productRoutes.get("/list", getProducts);
productRoutes.get("/list/:slug", getCategoryProducts);
productRoutes.get("/detail/:id", getProductDetail);
// router.get(`/list/:id`, getProductDetail);

export default productRoutes;