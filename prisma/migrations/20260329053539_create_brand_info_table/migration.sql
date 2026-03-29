-- CreateTable
CREATE TABLE "BrandInfo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "map" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "about" TEXT NOT NULL,

    CONSTRAINT "BrandInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BrandInfo_id_key" ON "BrandInfo"("id");
