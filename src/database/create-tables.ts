import { sqliteRUN } from "./db-connection"

export const createTables = async (): Promise<void> => {
  await sqliteRUN(`
    CREATE TABLE IF NOT EXISTS cards (
      id TEXT PRIMARY KEY,
      text TEXT NOT NULL
    );
  `);
}


