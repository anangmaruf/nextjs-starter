import z from "zod";

export const ProfileSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export type ProfileValeu = z.infer<typeof ProfileSchema>;
