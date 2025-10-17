import { getServerSession, getUserSession } from "@/lib/get-session";
import { throwIfError } from "@/lib/throwIf";
import { UserRepository } from "@/repositories/UserRepository";

// const getCurrentUser = async () => {
//   const session = await getUserSession();
//   // throwIfError(!session, "Unauthorize");

//   // const user = await await UserRepository.getById(session)
//   // return session;
//   console.log(session, "session");
// };

/**
 * Get data admin by email
 * @param {string} email
 * @returns
 */
const getByEmail = async (email: string) => {
  const result = await UserRepository.findByEmail(email);
  return result;
};

const updateProfile = async (id: string, payload: any) => {
  const result = await UserRepository.updateById(id, payload);
  return result;
};

export const UserService = {
  getByEmail,
  updateProfile,
  // getCurrentUser,
};
