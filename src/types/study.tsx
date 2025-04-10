import type { MemberPart } from "./member";

export type Study = {
  id: string;
  generation: number;
  title: string;
  content: string;
  src?: string;
  name: string;
  part: MemberPart;
  status: string;
  members: string[] | string;
};
