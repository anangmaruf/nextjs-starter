import z from "zod";

export const ProfileSchema = z.object({
  name: z.string(),
});

export type ProfileValue = z.infer<typeof ProfileSchema>;
