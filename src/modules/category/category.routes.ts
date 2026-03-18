import { Router } from "express";
import {
  createCategory,
  getCategories,
} from "./category.controller.js";

const categoryRoutes = Router();

categoryRoutes.post("/add", createCategory);
categoryRoutes.get("/list", getCategories);

export default categoryRoutes;