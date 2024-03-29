import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_DIALECT = process.env.DATABASE_DIALECT;
export const JWT_SECRET = process.env.JWT_SECRET;
