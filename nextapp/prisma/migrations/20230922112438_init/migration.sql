/*
  Warnings:

  - Added the required column `updated` to the `Podo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Podo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "case_id" INTEGER NOT NULL,
    "lawyer" TEXT NOT NULL,
    "court" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL
);
INSERT INTO "new_Podo" ("case_id", "court", "id", "lawyer", "name") SELECT "case_id", "court", "id", "lawyer", "name" FROM "Podo";
DROP TABLE "Podo";
ALTER TABLE "new_Podo" RENAME TO "Podo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
