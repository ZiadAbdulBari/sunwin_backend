import {Router} from "express"
import { createQuery, getQuery } from "./query.controller.js";
const queryRouters = Router();
queryRouters.post("/add",createQuery);
queryRouters.get("/list",getQuery);
export default queryRouters