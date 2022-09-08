import { Request, Response } from 'express';
import { prisma } from '../config/database';
import * as questionRepository from '../repositories/questionRepository';

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;

  await questionRepository.createQuestion(askedBy, question);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
