import type { Request, Response } from "express";
import * as QueryService from "./query.service.js";
export const createQuery = async (req: Request, res: Response) => {
  try {
    const section = await QueryService.createQuery(req.body);
    res.status(201).json({
      success: true,
      data: section,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export const getQuery = async (req: Request, res: Response) => {
  try {
    const queryList = await QueryService.getQuery(req.query as any);
    res.status(200).json({
      success: true,
      data: queryList,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
