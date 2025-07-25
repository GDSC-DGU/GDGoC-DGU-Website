export interface BlogCardProps {
  src: string;
  generation: number;
  title: string;
  content: string;
  blogUrl: string;
  tags: string[];
}

export const blogCardData: BlogCardProps[] = [
  {
    src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fb3CcKW%2FbtsKWQyxXYT%2FAAAAAAAAAAAAAAAAAAAAAAVrXfRY-H_fv4z1_KRwf41r1T1Xi53OUZHSOSJDehK1%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1753973999%26allow_ip%3D%26allow_referer%3D%26signature%3D%252B1Xfz4j6Kd0OduQ0BGbfGWMpYzw%253D",
    generation: 2,
    title: "[리액트 스터디] React - SSR, RSC",
    content:
      "1. SSR (Server Side Rendering)1-1. SSR이란?서버 사이드 렌더링(SSR)은 웹 애플리케이션에서 클라이언트 측에서만 렌더링되던 부분을 서버에서도 렌더링하여 완전한 HTML 문서를 클라이언트에게 제공하는 기술이다. 즉, 서버로부터 요청해서 받은 내용을 브라우저 화면에 표시해주는 기술이다. ",
    blogUrl: "https://taewook2.tistory.com/13?category=1077409",
    tags: ["React", "SSR", "RSC", "Web/App"],
  },
  {
    src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbdDfYJ%2FbtsMx4PxxH3%2FAAAAAAAAAAAAAAAAAAAAAMjmX_6rN4ceorrTFHoT9_0VxL3PqnRyDA1CtvDNmlyz%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1753973999%26allow_ip%3D%26allow_referer%3D%26signature%3D7v1RUd%252F8ioxWP%252FnHAacG8R4Veqk%253D",
    generation: 2,
    title: "웹 사이트 검색엔진 최적화 (SEO) 방법",
    content:
      "검색 엔진 최적화-SEO(Search Engine Optimization)란, 구글이나 네이버 같은 검색 엔진에서 검색 결과, 웹사이트 또는 웹페이지의 상위 노출도를 높이는 작업입니다.  페이지 상단에 뜰수록 유저들의 방문 확률이 높아질 것이고 이것을 검색 엔진 최적화(SEO)라고 합니다.",
    blogUrl: "https://taewook2.tistory.com/21",
    tags: ["SEO", "Next.js", "검색엔진 최적화"],
  },
  {
    src: "",
    generation: 2,
    title: "TanStack Query 개념 정리",
    content:
      "안녕하세요 35기 SOPT WEB YB 김태욱입니다. 이번 앱잼에서 Tanstack Query를 도입했고 부족하다  생각하여 개념을 정리해보았습니다. 서버 상태를 변경하는 Mutation 부분을 후반부에 중점적으로 다뤘으니 참고하여 읽어주시면 될 것 같아요! Tanstack Query란?웹 애플리케이션에서 서버 상태 가져오기, 캐싱, 동기화 및 업데이트를 용이하게 만들어주는 라이브러리이다. ",
    blogUrl: "https://taewook2.tistory.com/20",
    tags: ["TanStack", "Web/App", "Web"],
  },
];
