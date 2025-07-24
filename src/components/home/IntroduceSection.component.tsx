import Image from "next/image";

import { TwoCircleComponent } from "@/src/components/page/TwoCircle.components";

export const IntroduceSection = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 mb-64 p-10'>
      <TwoCircleComponent
        TwoCircle={{ circleColor: "border-red", text: "GDGoC?", textColor: "text-red", size: 230, textSize: 20 }}
      />
      <Image src='/images/svg/default_img.svg' alt='GDGoC' width={1216} height={1000} />
      <div className='text-black font-medium text-[21px] font-notosanskr mt-10'>GDGoC란?</div>
      <div className='text-gray-600 font-medium text-[16px] font-notosanskr leading-relaxed text-center'>
        Google Developer Groups on Campus (GDGoC) 프로그램은 학생들이 개발/리더십 능력을 키울 수 있도록 지원하는
        프로그램입니다.
        <br />
        기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한 다양한 활동들을 지원합니다.
        <br />
        학생이 성장할 수 있도록 전세계의 학생 운영진들과의 교류 기회, Google의 이벤트 참여, 현업 엔지니어와의 만남 등
        <br />
        다양한 기회를 제공하고 쇼케이스/워크샵을 통해 역량을 높일 수 있도록 돕습니다.
      </div>
    </section>
  );
};
