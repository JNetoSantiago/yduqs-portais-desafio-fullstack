-- DropForeignKey
ALTER TABLE "public"."Student" DROP CONSTRAINT "Student_installmentId_fkey";

-- AlterTable
ALTER TABLE "public"."Student" ALTER COLUMN "installmentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_installmentId_fkey" FOREIGN KEY ("installmentId") REFERENCES "public"."Installment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
