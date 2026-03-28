import { Router } from "express";
import {
  createCategory,
  deteleCategory,
  getCategories,
} from "./category.controller.js";

const categoryRoutes = Router();

categoryRoutes.post("/add", createCategory);
categoryRoutes.get("/list", getCategories);
categoryRoutes.post("/delete", deteleCategory);

export default categoryRoutes;