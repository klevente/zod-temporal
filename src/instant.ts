import { z } from 'zod';
import { Temporal } from '@js-temporal/polyfill';

export const instant = z.string().transform((x, ctx) => {
  try {
    return Temporal.Instant.from(x);
  } catch (e) {
    let message = 'Failed to parse date string';
    if (e instanceof Error) {
      message = e.message;
    }
    ctx.addIssue({
      code: z.ZodIssueCode.invalid_date,
      message,
      fatal: true,
    });
    return z.NEVER;
  }
});
