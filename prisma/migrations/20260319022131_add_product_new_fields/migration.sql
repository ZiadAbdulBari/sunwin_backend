-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "application" TEXT,
ADD COLUMN     "keyFeature" TEXT,
ADD COLUMN     "shortName" TEXT,
ADD COLUMN     "specification" TEXT NOT NULL DEFAULT '';
