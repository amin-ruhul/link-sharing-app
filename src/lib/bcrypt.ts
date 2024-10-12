import { hash, compare } from "bcrypt";

async function createHashPassword(password: string) {
  const saltRounds = 10;
  const hashPassword = await hash(password, saltRounds);
  return hashPassword;
}

async function comparePasswords(plainPassword: string, hashedPassword: string) {
  const isMatch = await compare(plainPassword, hashedPassword);
  return isMatch;
}

export { createHashPassword, comparePasswords };
