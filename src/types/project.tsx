export type Project = {
  id: string;
  generation: number;
  title: string;
  content: string;
  leader: string;
  src?: string;
  members: string[] | string;
  githubLink: string;
  youtubeLink?: string;
};
