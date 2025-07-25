export interface PageIntroContent {
  title: string;
  content: string;
}

export const PAGE_INTRODUCE: Record<"project" | "seminar" | "study", PageIntroContent> = {
  project: {
    title: "프로젝트",
    content:
      "GDG on Campus에서는 별도의 시기나 주제를 정하지 않고 프로젝트를 진행하며, \n구성원들이 자발적으로 연구하고 협업하여 의미 있는 결과물을 만들어가는 것을 목표로 합니다. \n이렇게 진행된 프로젝트들은 마지막 행사인 Demo Day를 통해 공유되며,\n구성원들이 서로의 성과를 발표하고 피드백을 주고받는 자리를 가집니다.",
  },
  seminar: {
    title: "세미나",
    content: "GDG on Campus DGU Member들이 진행한 다양한 세미나입니다.",
  },
  study: {
    title: "스터디",
    content:
      "GDG on Campus에서는 각 파트별로 다양한 스터디를 진행합니다.\nMember가 자발적으로 모여 자유로운 주제로 스터디를 진행하며, 격주마다 스터디 진행 상황을 공유하는 시간을 가집니다.",
  },
};
