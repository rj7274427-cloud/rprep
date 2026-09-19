export type Note = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  content: string;
  tags: string[];
  source: string;
  date: string;
  createdAt?: unknown;
};
