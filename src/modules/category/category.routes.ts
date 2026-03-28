import { Router } from "express";
import {
  createCategory,
  deteleCategory,
  getCategories,
  updateCategory,
} from "./category.controller.js";

const categoryRoutes = Router();

categoryRoutes.post("/add", createCategory);
categoryRoutes.get("/list", getCategories);
categoryRoutes.post("/delete", deteleCategory);
categoryRoutes.post("/update", updateCategory);

export default categoryRoutes;