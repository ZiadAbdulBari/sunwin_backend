import type { Request, Response } from "express";
import * as SectionService from "./section.service.js";
export const createSection = async (req: Request, res: Response) => {
  try {
    const section = await SectionService.createSection(req.body);
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
export const getSection = async (req: Request, res: Response) => {
  try {
    const sectionList = await SectionService.getSection();
    res.status(200).json({
      success: true,
      data: sectionList,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export const updateSection = async (req:Request,res:Response)=>{
  console.log(req.body);
  return
  try{
    await SectionService.updateSection(req.body);
    res.status(200).json({
      success: true
    });
  }
  catch(error:any){
    res.status(400).json({
      message: error.message,
    });
  }
}