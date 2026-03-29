import {Router} from "express";
import { createBrand } from "./brand.controller.js";
import multer from "multer";
const brandRoutes = Router();
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
brandRoutes.post('/add',upload.single('logo'),createBrand);
export default brandRoutes;
