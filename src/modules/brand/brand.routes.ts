import {Router} from "express";
import { createBrand, getBrandInfo } from "./brand.controller.js";
import multer from "multer";
const brandRoutes = Router();
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
brandRoutes.post('/add',upload.single('logo'),createBrand);
brandRoutes.get('/get',getBrandInfo);
export default brandRoutes;
