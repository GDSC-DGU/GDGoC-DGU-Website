import Image from "next/image";

export const PART_INTRODUCE = [
  {
    part: "AI/ML",
    icon: <Image src='/images/svg/AM.svg' alt='AI/ML 아이콘' width={88} height={77} />,
    content: "인공지능(AI) 및 머신러닝(ML) 기술을 활용한 데이터 분석, 모델 개발, 딥러닝을 진행합니다.",
    small_icon: <Image src='/images/svg/Star_red.svg' alt='AI/ML 별 아이콘' width={16} height={13} />,
    preferContent: "인공지능 강의 수강자, 모델튜닝 경험자, AI 관련 해커톤 참여 유경험자 우대",
    tags: ["Python", "PyTorch", "TensorFlow", "Keras"],
  },
  {
    part: "Server/Cloud",
    icon: <Image src='/images/svg/SC.svg' alt='Server/Cloud 아이콘' width={88} height={77} />,
    content: "서버리스 아키텍처, 컨테이너 오케스트레이션, DevOps 등의 기술을 학습하고 프로젝트를 수행합니다.",
    small_icon: <Image src='/images/svg/Star_blue.svg' alt='Server/Cloud 별 아이콘' width={16} height={13} />,
    preferContent: "서비스를 개발하여 배포 운영 경험이 있으신 분, 새로운 기술에 열려있는 분 우대",
    tags: ["Nest.js", "Django", "Spring Boot", "Express"],
  },
  {
    part: "Web/App",
    icon: <Image src='/images/svg/WA.svg' alt='Wep/App 아이콘' width={88} height={77} />,
    content: "Flutter, Android, Firebase, React 등을 활용하여 웹 및 모바일 애플리케이션을 개발합니다.",
    small_icon: <Image src='/images/svg/Star_green.svg' alt='Web/App 별 아이콘' width={16} height={13} />,
    preferContent: "여러 언어를 해보신 분, 프로젝트 완성, 서비스 배포 유경험자 우대",
    tags: ["React", "Flutter", "React Native", "Swift"],
  },
] as const;
