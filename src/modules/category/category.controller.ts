import type { Request, Response } from "express";
import * as CategoryService from "./category.service.js";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.createCategory(req.body);

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryService.getCategories();

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deteleCategory = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data)
  try {
    const removeCategory = await CategoryService.deteleCategory(data.id);
    res.status(200).json({
      success: true,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
