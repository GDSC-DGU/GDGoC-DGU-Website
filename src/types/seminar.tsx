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
  date: string;
};

export const seminarTypeMap: Record<string, string> = {
  전체: "전체",
  "캠핑 세미나": "Camping Seminar",
  "오픈 세미나": "Open Seminar",
};
