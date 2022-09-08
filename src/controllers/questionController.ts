import { Request, Response } from 'express';
import { prisma } from '../config/database';

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;

  await prisma.questions.create({data: {askedBy, question}});

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params;
  const { answeredBy, answer }: { answeredBy: string, answer: string } = req.body;
  
  const questionId = parseInt(id);
  
  await prisma.answers.create({data: {answeredBy, answer, questionId}});

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}