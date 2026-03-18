import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "./product.controller.js";
import multer from "multer";

const router = Router();
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
router.post("/add",upload.array('images', 6), createProduct);
router.get("/list", getProducts);

export default router;