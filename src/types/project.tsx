export type Project = {
  id: string;
  generation: number;
  title: string;
  content: string;
  leader: string;
  src?: string;
  members: string[];
  githubLink: string;
  youtubeLink?: string;
};
