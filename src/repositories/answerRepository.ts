import { prisma } from "../config/database";

export async function createAnswer(answeredBy: string, answer: string, id: string) {
    const questionId = parseInt(id);
    await prisma.answers.create({data: {answeredBy, answer, questionId}});
}

export async function getAnswers(questionId: number) {

    return await prisma.answers.findMany({
        where: {
            questionId
        },
        select: {
            answeredBy: true,
            answer: true
        }
    });
}