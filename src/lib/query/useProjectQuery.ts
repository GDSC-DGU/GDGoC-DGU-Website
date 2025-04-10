import { Project } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

async function fetchProjects(): Promise<Project[]> {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Failed to fetch members");
  return res.json();
}

export const useProjectQuery = () => {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};
