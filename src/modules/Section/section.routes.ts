import {Router} from "express"
import { createSection, deleteSection, getSection, updateSection } from "./section.controller.js";
const sectionRouters = Router();
sectionRouters.post("/add",createSection);
sectionRouters.get("/list",getSection);
sectionRouters.post("/update",updateSection);
sectionRouters.post("/delete",deleteSection);
export default sectionRouters