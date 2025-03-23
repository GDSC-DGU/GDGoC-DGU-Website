export type CardProps = {
  generation: number;
  memberName: string;
  title: string;
  content: string;
  src: string;
  part: "AI/ML" | "Server/Cloud" | "Web/App" | "Devral" | "Lead";
  role: string;
  major: string;
  githubLink: string;
  linkedInLink: string;
  name: string;
  status: string;
  category: string;
};
