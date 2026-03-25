/*
  Warnings:

  - You are about to drop the column `WhatsappNumber` on the `Query` table. All the data in the column will be lost.
  - Added the required column `whatsappNumber` to the `Query` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Query" DROP COLUMN "WhatsappNumber",
ADD COLUMN     "whatsappNumber" TEXT NOT NULL;
