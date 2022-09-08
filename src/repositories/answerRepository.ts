import { prisma } from "../config/database";

export async function createAnswer(answeredBy: string, answer: string, id: string) {
    const questionId = parseInt(id);
    await prisma.answers.create({data: {answeredBy, answer, questionId}});
}
