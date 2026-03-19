import type { Request, Response } from "express";
import * as ProductService from "./product.service.js";

export const createProduct = async ( req: Request, res: Response ) => {

  try {
    const product = await ProductService.createProduct(req.body, req.files);
    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getProducts();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getCategoryProducts = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  try {
    const products = await ProductService.getCategoryProducts(slug);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getProductDetail = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const products = await ProductService.getProductDetail(id);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};