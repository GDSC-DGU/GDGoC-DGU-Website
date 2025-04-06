import { Seminar } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

async function fetchSeminars(): Promise<Seminar[]> {
  const res = await fetch("/api/seminars");
  if (!res.ok) throw new Error("Failed to fetch members");
  return res.json();
}

export const useSeminarQuery = () => {
  return useQuery<Seminar[]>({
    queryKey: ["seminars"],
    queryFn: fetchSeminars,
  });
};
