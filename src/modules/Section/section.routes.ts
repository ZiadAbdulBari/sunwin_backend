import {Router} from "express"
import { createSection, getSection } from "./section.controller.js";
import { updateCategory } from "../category/category.controller.js";
const sectionRouters = Router();
sectionRouters.post("/add",createSection);
sectionRouters.get("/list",getSection);
sectionRouters.post("/update",updateCategory);
export default sectionRouters