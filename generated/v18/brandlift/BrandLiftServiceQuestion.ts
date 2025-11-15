import { z } from 'zod';

import { BrandLiftServiceGoal } from './BrandLiftServiceGoal';

export const BrandLiftServiceQuestion = z.object({
  questionId: z.number().int().nullable(),
  goal: BrandLiftServiceGoal,
  preApproveId: z.string().nullable(),
  question: z.string().nullable(),
  answerOption1: z.string().nullable(),
  answerOption2: z.string().nullable(),
  answerOption3: z.string().nullable(),
  answerOption4: z.string().nullable(),
  answerOption5: z.string().nullable()
}).nullable();

export type BrandLiftServiceQuestion = z.infer<typeof BrandLiftServiceQuestion>;
