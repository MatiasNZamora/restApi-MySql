import { config } from "dotenv";

config();
// port 
export const PORT = process.env.PORT || 4000;

// database 
export const DB_HOST = process.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_DATABASE = process.DB_DATABASE || 'companydb';
