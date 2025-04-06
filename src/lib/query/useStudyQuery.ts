import { Study } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

async function fetchStudys(): Promise<Study[]> {
  const res = await fetch("/api/studys");
  if (!res.ok) throw new Error("Failed to fetch members");
  return res.json();
}

export const useStudyQuery = () => {
  return useQuery<Study[]>({
    queryKey: ["studys"],
    queryFn: fetchStudys,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
