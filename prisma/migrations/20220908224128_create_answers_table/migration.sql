-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "answeredBy" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);
