/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Offer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `State` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."City" DROP CONSTRAINT "City_stateId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Offer" DROP CONSTRAINT "Offer_addressId_fkey";

-- DropTable
DROP TABLE "public"."Address";

-- DropTable
DROP TABLE "public"."City";

-- DropTable
DROP TABLE "public"."Offer";

-- DropTable
DROP TABLE "public"."State";

-- DropTable
DROP TABLE "public"."User";

-- DropEnum
DROP TYPE "public"."OfferModality";

-- DropEnum
DROP TYPE "public"."OfferShifts";
