/*
  Warnings:

  - Added the required column `value` to the `Installment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Installment" ADD COLUMN     "value" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Student" ALTER COLUMN "birthdate" SET DATA TYPE DATE,
ALTER COLUMN "yearConclusionSchool" SET DATA TYPE TEXT;
