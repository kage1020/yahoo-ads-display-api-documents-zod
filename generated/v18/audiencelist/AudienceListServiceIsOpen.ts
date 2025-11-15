import { z } from 'zod';

export const audienceListServiceIsOpen = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsOpen = z.infer<typeof audienceListServiceIsOpen>;
