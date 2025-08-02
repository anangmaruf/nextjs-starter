import db from "@/lib/db";
import { throwIfError } from "@/lib/throwIf";

// get data by email
const findByEmail = async (email: string) => {
  try {
    const data = await db.user.findUnique({
      where: { email },
    });
    return data;
  } catch (error: any) {
    throwIfError(error, error);
  }
};

export const UserRepository = {
  findByEmail,
};
