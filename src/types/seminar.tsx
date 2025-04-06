import type { MemberPart } from "./member";

export type SeminarCategory = "Camping Seminar" | "Open Seminar";

export type Seminar = {
  id: string;
  generation: number;
  title: string;
  content: string;
  src?: string;
  part: MemberPart;
  name: string;
  category: SeminarCategory;
};
