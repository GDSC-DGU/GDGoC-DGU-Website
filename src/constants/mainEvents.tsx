/**
 * 메인 이벤트 데이터 상수 (노션 연결 전 임시 데이터)
 * 추후 노션 연결로 수정 예정
 * @author 동현
 */

export interface MainEvent {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
}

export const MAIN_EVENTS: MainEvent[] = [
  {
    id: "solution-challenge",
    title: "Solution Challenge",
    content:
      "GDSC의 가장 큰 공식행사, 세계 각지의 GDSC 모든 멤버들이 참여하는 Solution Challenge 대회입니다. UN이 제시하는 17가지 문제점을 해결하는 서비스를 만드는 행사입니다.",
    imageSrc: "/images/png/solution_challenge.png",
  },
  {
    id: "joint-seminar",
    title: "Joint Seminar",
    content: "타대학의 GDG on Campus와 서로의 활동 경험을 공유하고 네트워킹을 다지는 연합 세미나를 진행합니다.",
    imageSrc: "/images/png/joint_seminar.png",
  },
  {
    id: "open-seminar",
    title: "Open Seminar",
    content:
      "교내 학우들이 자유롭게 참여할 수 있는 오픈 세미나를 주최합니다. 오픈 세미나를 통해 동국대학교 학우들에게 GDG의 '함께 지식을 공유하고 성장하는 가치'를 알리며 교내 IT 관련 학업 환경에 긍정적인 영향을 끼치고자 합니다.",
    imageSrc: "/images/png/open_seminar.png",
  },
  {
    id: "membership-training",
    title: "Membership Training",
    content: "레크레이션, 마니또, 스키장 MT 등 다양한 활동을 하며 추억을 쌓는 시간을 가집니다.",
    imageSrc: "/images/png/membership_training.png",
  },
];
