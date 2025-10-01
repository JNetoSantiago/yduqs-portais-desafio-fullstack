/*
  Warnings:

  - You are about to drop the column `installmentsQty` on the `Offer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Offer" DROP COLUMN "installmentsQty",
ALTER COLUMN "shift" DROP NOT NULL,
ALTER COLUMN "originalPrice" DROP NOT NULL,
ALTER COLUMN "withDiscountPrice" DROP NOT NULL;
