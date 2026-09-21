import { writeText } from "@tauri-apps/plugin-clipboard-manager";

export async function copy(text: string): Promise<{
  result: "success" | "error" | "info" | "warning";
  message: string;
}> {
  try {
    await writeText(text);
    return {
      result: "success",
      message: "Copied to clipboard successfully",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        result: "error",
        message: error.message,
      };
    }

    return {
      result: "error",
      message: "An unexpected error ocurred while copying to clipboard",
    };
  }
}
