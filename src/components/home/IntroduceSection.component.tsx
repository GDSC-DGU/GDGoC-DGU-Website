import Image from "next/image";

import { TwoCircleComponent } from "@/src/components/page/TwoCircle.components";

/**
 * GDGoC 소개 섹션 컴포넌트
 * @author 동현
 * @description 홈페이지의 GDGoC 소개 섹션을 렌더링합니다. 모바일에서는 mobile_default.svg를, 데스크톱에서는 default_img.svg를 사용합니다.
 */
export const IntroduceSection = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 mb-64 p-10'>
      <TwoCircleComponent
        TwoCircle={{ circleColor: "border-red", text: "GDGoC?", textColor: "text-red", size: 230, textSize: 20 }}
      />
      <div className='relative w-full max-w-[1216px] h-[144px] tablet:h-[309px]'>
        <Image src='/images/svg/default_img.svg' alt='GDGoC' fill className='hidden tablet:block object-contain' />
        <Image src='/images/svg/mobile_default.svg' alt='GDGoC' fill className='block tablet:hidden object-contain' />
      </div>
      <div className='text-black font-medium text-lg tablet:text-xl desktop:text-[21px] font-notosanskr mt-10'>
        GDGoC란?
      </div>
      <div className='text-gray-600 font-medium text-sm tablet:text-base desktop:text-[16px] font-notosanskr leading-relaxed text-center'>
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
