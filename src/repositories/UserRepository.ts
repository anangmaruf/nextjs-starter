import db from "@/lib/db";
import { throwIfError } from "@/lib/throwIf";

const getById = async (id: string) => {
  try {
    const result = await db.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true },
    });
    return result;
  } catch (error: any) {
    throwIfError(error, error);
  }
};

// get data by email
const findByEmail = async (email: string) => {
  try {
    const result = await db.user.findUnique({
      where: { email },
    });
    return result;
  } catch (error: any) {
    throwIfError(error, error);
  }
};

const updateById = async (id: string, data: any) => {
  try {
    const result = await db.user.update({
      where: {
        id,
      },
      data,
    });

    return result;
  } catch (error: any) {
    throwIfError(error, error);
  }
};

export const UserRepository = {
  findByEmail,
  updateById,
  getById,
};
