export type Member = {
  id: string;
  name: string;
  part: MemberPart;
  major: string;
  generation: number;
  role: MemberRole;
  githubLink: string;
  linkedInLink?: string;
  src?: string;
};

export type MemberRole = "Core" | "General" | "Lead";
export type MemberPart = "AI/ML" | "Server/Cloud" | "Web/App" | "Devrel" | "Lead";
