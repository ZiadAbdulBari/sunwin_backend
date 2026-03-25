import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import categoryRoutes from "../modules/category/category.routes.js";
import productRoutes from "../modules/product/product.routes.js";
import sectionRouters from "../modules/Section/section.routes.js";
import queryRouters from "../modules/query/query.routes.js";
const router = Router();

router.use("/auth", authRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/sections",sectionRouters);
router.use("/queries",queryRouters);
export default router;