import "@next/env";
import bcrypt from "bcrypt";
/**
 * Generate URL string for DB Connection
 * @returns {string} urlString
 */
export const createStringConnection = (): string => {
  const port = typeof process.env.DB_PORT === "string" ? parseInt(process.env.DB_PORT) : process.env.DB_PORT;
  const creadentials = process.env.DB_PASSWORD ? `${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}` : process.env.DB_USERNAME;
  const urlString: string = `postgresql://${creadentials}@${process.env.DB_HOST}:${port}`;

  return process.env.DB_OPTIONS ? `${urlString}?${process.env.DB_OPTIONS}` : urlString;
};

export const getSegmentURL = ({ url, segment }: { url: string; segment: number }) => {
  const parseurl = url.replace(/\//g, " ");
  console.log(parseurl);
};

export const hashPassword = async (passwordStr: string) => {
  const hashedPassword = await bcrypt.hash(passwordStr, 20);
  return hashedPassword;
};

export const comparePassword = async (hashedPassword: string, password: string) => {
  const compare = await bcrypt.compare(hashedPassword, password);
  return compare;
};
