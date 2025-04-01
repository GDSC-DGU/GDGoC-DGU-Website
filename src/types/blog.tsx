export type Blog = {
  title: string;
  description: string;
  date?: string;
  slug: string;
  image: string;
  tags?: string[];
  // rest
  [key: string]: any;
  category?: BlogCategory;
};

export type BlogCategory =
  | "React & ReactNative"
  | "Javascript & Typescript"
  | "AWS"
  | "Devops"
  | "Database"
  | "CS"
  | "Retrospective"
  | "ETC";
