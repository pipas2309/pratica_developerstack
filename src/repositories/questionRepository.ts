import { prisma } from "../config/database";
import { getAnswers } from "./answerRepository";

export async function createQuestion(askedBy: string, question: string) {
    await prisma.questions.create({data: {askedBy, question}});
}

export async function getAllQuestions() {
    return await prisma.questions.findMany();
}

export async function getUniqueQuestion(id: string) {
    const questionId = parseInt(id);

    const question = await prisma.questions.findUnique({
        where: {
            id: questionId
        }
    });

    const answers = await getAnswers(questionId);

    return {
        ...question,
        answers
    };
}