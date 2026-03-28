import {Router} from "express"
import { createSection, getSection, updateSection } from "./section.controller.js";
const sectionRouters = Router();
sectionRouters.post("/add",createSection);
sectionRouters.get("/list",getSection);
sectionRouters.post("/update",updateSection);
export default sectionRouters