import { MainEvent } from "@/src/types/mainEvent";
import { useQuery } from "@tanstack/react-query";

async function fetchMainEvents(): Promise<MainEvent[]> {
  const res = await fetch("/api/mainEvents");
  if (!res.ok) throw new Error("Failed to fetch main events");
  return res.json();
}

/**
 * 메인 이벤트 데이터를 조회하는 React Query 훅
 * @author 동현
 */
export const useMainEventQuery = () => {
  return useQuery({
    queryKey: ["mainEvents"],
    queryFn: fetchMainEvents,
  });
};
