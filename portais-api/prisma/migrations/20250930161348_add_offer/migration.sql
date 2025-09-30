-- CreateEnum
CREATE TYPE "public"."OfferModality" AS ENUM ('EAD', 'FACE_TO_FACE');

-- CreateEnum
CREATE TYPE "public"."OfferShifts" AS ENUM ('MORNING', 'AFTERNOON', 'NIGHT');

-- CreateTable
CREATE TABLE "public"."Offer" (
    "id" SERIAL NOT NULL,
    "modality" "public"."OfferModality" NOT NULL DEFAULT 'FACE_TO_FACE',
    "shift" "public"."OfferShifts" NOT NULL DEFAULT 'MORNING',
    "originalPrice" INTEGER NOT NULL,
    "withDiscountPrice" INTEGER NOT NULL,
    "installmentsQty" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Offer" ADD CONSTRAINT "Offer_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
