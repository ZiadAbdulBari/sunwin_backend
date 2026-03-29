import { Request, Response } from "express";
import * as BrandService from "./brand.service.js";
export const createBrand = async (req: Request, res: Response) => {
  try {
    await BrandService.createBrand(req.body, req.file);
    res.status(201).json({
      success: true,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getBrandInfo = async (req: Request, res: Response) => {
  try {
    const info = await BrandService.getBrandInfo();
     res.status(201).json({
      success: true,
      data:info
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
