import type { Prompt } from "../types/prompt";
import Database from "@tauri-apps/plugin-sql";

const db = Database.load("sqlite:prompts.db");
let databaseReady: Promise<Awaited<typeof db>> | undefined;

async function getDatabase() {
  databaseReady ??= db.then(async (database) => {
    await database.execute(
      "CREATE TABLE IF NOT EXISTS prompts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT NOT NULL, prompt TEXT NOT NULL)",
    );
    return database;
  });

  return databaseReady;
}

export async function addPrompt(title: string, desc: string, prompt: string) {
  await (await getDatabase()).execute(
    "INSERT INTO prompts (title, description, prompt) VALUES ($1, $2, $3)",
    [title, desc, prompt],
  );
}

export function updatePrompt() {}

export function deletePrompt() {}

export async function getAllPrompts() {
  return await (await getDatabase()).select<Prompt[]>(
    "SELECT * FROM prompts ORDER BY id DESC",
  );
}

export async function getPromptById(id: number | string) {
  return (
    await (await getDatabase()).select<Prompt[]>(
      "SELECT * FROM prompts WHERE id = $1",
      [id],
    )
  )[0];
}
