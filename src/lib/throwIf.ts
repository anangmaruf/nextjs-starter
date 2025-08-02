export const throwIfError = (condition: boolean, message: string) => {
  if (condition) throw new Error(message);
};
