import { z } from 'zod';

import { brandLiftServiceGoal } from './BrandLiftServiceGoal';

export const brandLiftServiceQuestion = z.object({
  questionId: z.number().int().nullable(),
  goal: brandLiftServiceGoal,
  preApproveId: z.string().nullable(),
  question: z.string().nullable(),
  answerOption1: z.string().nullable(),
  answerOption2: z.string().nullable(),
  answerOption3: z.string().nullable(),
  answerOption4: z.string().nullable(),
  answerOption5: z.string().nullable()
}).nullable();

export type BrandLiftServiceQuestion = z.infer<typeof brandLiftServiceQuestion>;
