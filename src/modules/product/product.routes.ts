import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "./product.controller.js";

const router = Router();

router.post("/add", createProduct);
router.get("/list", getProducts);

export default router;