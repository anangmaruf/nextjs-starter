import { UserRepository } from "@/repositories/UserRepository";

/**
 * Get data admin by email
 * @param {string} email
 * @returns
 */
const getByEmail = async (email: string) => {
  const data = await UserRepository.findByEmail(email);
  return data;
};

export const UserService = {
  getByEmail,
};
