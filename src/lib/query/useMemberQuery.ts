import { Member } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

async function fetchMembers(): Promise<Member[]> {
  const res = await fetch("/api/members");
  if (!res.ok) throw new Error("Failed to fetch members");
  return res.json();
}

export const useMemberQuery = () => {
  return useQuery<Member[]>({
    queryKey: ["members"],
    queryFn: fetchMembers,
  });
};
