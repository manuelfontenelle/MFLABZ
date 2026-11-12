import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Keep "!" on the same line as the word before it. Stored review text stays unchanged.
export function keepExclamationWithWord(text: string) {
  return text.replace(/ +(?=!)/g, "\u00A0");
}
