export type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  coverImage?: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};
