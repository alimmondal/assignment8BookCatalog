/*
  Warnings:

  - You are about to drop the column `user_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `book_id` on the `orderedBook` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `orderedBook` table. All the data in the column will be lost.
  - You are about to drop the column `book_id` on the `reviewRating` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `reviewRating` table. All the data in the column will be lost.
  - Added the required column `userId` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookId` to the `orderedBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `orderedBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookId` to the `reviewRating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `reviewRating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_user_id_fkey";

-- DropForeignKey
ALTER TABLE "orderedBook" DROP CONSTRAINT "orderedBook_book_id_fkey";

-- DropForeignKey
ALTER TABLE "orderedBook" DROP CONSTRAINT "orderedBook_order_id_fkey";

-- DropForeignKey
ALTER TABLE "reviewRating" DROP CONSTRAINT "reviewRating_book_id_fkey";

-- DropForeignKey
ALTER TABLE "reviewRating" DROP CONSTRAINT "reviewRating_user_id_fkey";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "user_id",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orderedBook" DROP COLUMN "book_id",
DROP COLUMN "order_id",
ADD COLUMN     "bookId" TEXT NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "reviewRating" DROP COLUMN "book_id",
DROP COLUMN "user_id",
ADD COLUMN     "bookId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "reviewRating" ADD CONSTRAINT "reviewRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviewRating" ADD CONSTRAINT "reviewRating_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderedBook" ADD CONSTRAINT "orderedBook_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderedBook" ADD CONSTRAINT "orderedBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
