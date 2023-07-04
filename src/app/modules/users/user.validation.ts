import { z } from 'zod';
// validate user input with zod
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Validation error!',
    }),
    password: z.string().optional(),
  }),
});

export { createUserZodSchema };
