export interface LLMResponse {
  model: 'ChatGPT' | 'Gemini' | 'Claude' | 'DeepSeek' | 'Other';
  response: string;
  timestamp: string;
  version?: string; // e.g., "GPT-4", "Claude-3.5", etc.
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  responses?: LLMResponse[];
}

export interface PromptCategory {
  id: string;
  name: string;
  description: string;
  color: string; // Tailwind color class
}