import { Router } from "express";
import {
  createCategory,
  getCategories,
} from "./category.controller";

const categoryRoutes = Router();

categoryRoutes.post("/add-category", createCategory);
categoryRoutes.get("/category-list", getCategories);

export default categoryRoutes;