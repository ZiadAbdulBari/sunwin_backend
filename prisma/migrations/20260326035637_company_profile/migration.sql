-- CreateTable
CREATE TABLE "CompanyProfile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'None',
    "logo" TEXT NOT NULL DEFAULT 'None',
    "aboutus" TEXT NOT NULL DEFAULT 'None',
    "mobile" TEXT NOT NULL DEFAULT 'None',
    "email" TEXT NOT NULL DEFAULT 'None',
    "address" TEXT NOT NULL DEFAULT 'None',
    "country" TEXT NOT NULL DEFAULT 'None',

    CONSTRAINT "CompanyProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyProfile_id_key" ON "CompanyProfile"("id");
