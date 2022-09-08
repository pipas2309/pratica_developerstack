import { Request, Response } from 'express';
import { prisma } from '../config/database';
import * as questionRepository from '../repositories/questionRepository';
import * as answerRepository from '../repositories/answerRepository';

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;

  await questionRepository.createQuestion(askedBy, question);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params;
  const { answeredBy, answer }: { answeredBy: string, answer: string } = req.body;
    
  await answerRepository.createAnswer(answeredBy, answer, id);

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const allQuestions = await questionRepository.getAllQuestions();

  if(!allQuestions[0]) return res.sendStatus(204);

  res.send(allQuestions).status(200);
}

export async function getById(req: Request, res: Response) {
  // TODO
}