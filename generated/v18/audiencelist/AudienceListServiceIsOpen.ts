import { z } from 'zod';

export const AudienceListServiceIsOpen = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsOpen = z.infer<typeof AudienceListServiceIsOpen>;
