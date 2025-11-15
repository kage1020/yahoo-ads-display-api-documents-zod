import { z } from 'zod';

export const mediaServiceLogoFlg = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type MediaServiceLogoFlg = z.infer<typeof mediaServiceLogoFlg>;
