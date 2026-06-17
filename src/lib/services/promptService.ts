import type { Prompt } from "../types/prompt";
import promptsData from "$lib/data/prompts.json";

const prompts = promptsData satisfies Prompt[];

export function getAllPrompts(): Prompt[] {
  return prompts;
}

export function getPromptById(id: string): Prompt | undefined {
  return prompts.find((prompt) => prompt.id == id);
}
