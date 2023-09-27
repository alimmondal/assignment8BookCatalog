/*
  Warnings:

  - The values [Customer,Admin,Author] on the enum `roles` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "roles_new" AS ENUM ('customer', 'admin', 'author');
ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "user" ALTER COLUMN "role" TYPE "roles_new" USING ("role"::text::"roles_new");
ALTER TYPE "roles" RENAME TO "roles_old";
ALTER TYPE "roles_new" RENAME TO "roles";
DROP TYPE "roles_old";
ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'customer';
COMMIT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'customer';
