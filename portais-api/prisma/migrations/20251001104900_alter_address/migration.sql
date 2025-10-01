/*
  Warnings:

  - The values [FACE_TO_FACE] on the enum `OfferModality` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `city` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[uf]` on the table `State` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cityId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateId` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."OfferModality_new" AS ENUM ('EAD', 'PRESENCIAL');
ALTER TABLE "public"."Offer" ALTER COLUMN "modality" DROP DEFAULT;
ALTER TABLE "public"."Offer" ALTER COLUMN "modality" TYPE "public"."OfferModality_new" USING ("modality"::text::"public"."OfferModality_new");
ALTER TYPE "public"."OfferModality" RENAME TO "OfferModality_old";
ALTER TYPE "public"."OfferModality_new" RENAME TO "OfferModality";
DROP TYPE "public"."OfferModality_old";
ALTER TABLE "public"."Offer" ALTER COLUMN "modality" SET DEFAULT 'PRESENCIAL';
COMMIT;

-- AlterTable
ALTER TABLE "public"."Address" DROP COLUMN "city",
DROP COLUMN "state",
ADD COLUMN     "cityId" INTEGER NOT NULL,
ADD COLUMN     "stateId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Offer" ALTER COLUMN "modality" SET DEFAULT 'PRESENCIAL';

-- DropTable
DROP TABLE "public"."User";

-- CreateIndex
CREATE UNIQUE INDEX "State_uf_key" ON "public"."State"("uf");

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "public"."State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
