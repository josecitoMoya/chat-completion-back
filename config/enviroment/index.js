import dotenv from "dotenv";

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION;
export const GPT_API_KEY = process.env.GPT_API_KEY;
export const GPT_ORGANIZATION = process.env.GPT_ORGANIZATION;
export const DB_URL = process.env.DB_URL;
