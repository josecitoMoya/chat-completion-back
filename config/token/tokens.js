import jwt from "jsonwebtoken";

import { JWT_SECRET, JWT_EXPIRATION } from "../enviroment/index.js";

export const generateToken = (userData) => {
  const { name, email } = userData;
  return jwt.sign({ name, email }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export const validateToken = (userData) => {
  const tokenValidated = jwt.verify(userData, JWT_SECRET);
  return tokenValidated;
};
