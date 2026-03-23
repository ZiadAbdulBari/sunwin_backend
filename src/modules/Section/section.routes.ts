import {Router} from "express"
import { createSection, getSection } from "./section.controller.js";
const sectionRouters = Router();
sectionRouters.post("/add",createSection);
sectionRouters.get("/list",getSection);
export default sectionRouters