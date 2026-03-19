/*
  Warnings:

  - Added the required column `imageId` to the `ProductImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductImage" ADD COLUMN     "imageId" TEXT NOT NULL;
