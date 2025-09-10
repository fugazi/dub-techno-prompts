import type { Prompt, PromptCategory } from '../types';
import { getCollection } from 'astro:content';

export async function getAllPrompts(): Promise<Prompt[]> {
  const entries = await getCollection('prompts');
  if (!Array.isArray(entries)) return [];
  return entries.map((e: any) => ({ ...e.data, id: e.slug }) as Prompt);
}

export async function getPromptById(id: string): Promise<Prompt | undefined> {
  const entries = await getCollection('prompts');
  const entry = entries.find((e: any) => e.slug === id);
  if (!entry) return undefined;
  return { ...entry.data, id: entry.slug } as Prompt;
}

export async function getPromptsByCategory(categoryId: string): Promise<Prompt[]> {
  const entries = await getCollection('prompts');
  return entries.map((e: any) => e.data as Prompt).filter((prompt: Prompt) => prompt.category === categoryId);
}

export async function getAllCategories(): Promise<PromptCategory[]> {
  const entries = await getCollection('categories');
  if (!Array.isArray(entries)) return [];
  return entries.map((e: any) => e.data as PromptCategory);
}

export type HomePageData = {
  prompts: Prompt[];
  categories: PromptCategory[];
  totalResponses: number;
};

export async function getHomePageData(): Promise<HomePageData> {
  const prompts = await getAllPrompts();
  const categories = await getAllCategories();
  const totalResponses = prompts.reduce((total, p: Prompt) => total + (p.responses?.length ?? 0), 0);

  return {
    prompts,
    categories,
    totalResponses
  };
}

export async function getCategoryById(id: string): Promise<PromptCategory | undefined> {
  const entries = await getCollection('categories');
  return entries.map((e: any) => e.data as PromptCategory).find((category: PromptCategory) => category.id === id);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatTimestamp(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getModelColor(model: string): string {
  const colors: Record<string, string> = {
    'ChatGPT': 'bg-green-100 text-green-800 border-green-200',
    'Claude': 'bg-orange-100 text-orange-800 border-orange-200',
    'Gemini': 'bg-blue-100 text-blue-800 border-blue-200',
    'DeepSeek': 'bg-purple-100 text-purple-800 border-purple-200',
    'Other': 'bg-gray-100 text-gray-800 border-gray-200'
  };
  return colors[model] || colors['Other'];
}