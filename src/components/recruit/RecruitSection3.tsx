import Image from "next/image";

import { PART_INTRODUCE } from "@/src/constants/partIntroduce";
import { TARGET } from "@/src/constants/target";
import { TwoCircle } from "@/src/types";

import { TargetComponent } from "../Target.component";
import { PartIntroduceCard } from "../card/PartIntroduceCard.component";
import { TwoCircleComponent } from "../page/TwoCircle.components";

export default function RecruitSection3() {
  const PartCircleData: TwoCircle = {
    circleColor: "border-red bg-white",
    text: "PART",
    textColor: "text-red",
    textSize: 24,
    size: 137,
  };
  const TargetCircleData: TwoCircle = {
    circleColor: "border-green bg-white",
    text: "Target",
    textColor: "text-green",
    textSize: 24,
    size: 137,
  };
  const PlanCircleData: TwoCircle = {
    circleColor: "border-blue bg-white",
    text: "PLAN",
    textColor: "text-blue",
    textSize: 24,
    size: 137,
  };

  return (
    <>
      <div className='flex flex-col items-center w-full bg-linear-custom desktop:bg-conic-custom gap-[70px] py-[100px]'>
        <TwoCircleComponent TwoCircle={PartCircleData} />
        <div className='grid desktop:grid-cols-3 gap-[60px] max-w-[1240px] max-h-[1687px] justify-items-center w-full'>
          {PART_INTRODUCE.map((item) => (
            <PartIntroduceCard
              key={item.part}
              part={item.part}
              icon={item.icon}
              content={item.content}
              small_icon={item.small_icon}
              preferContent={item.preferContent}
              tags={item.tags}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center justify-center w-full h-[902px] py-[100px] gap-[48px] box-border'>
        <TwoCircleComponent TwoCircle={TargetCircleData} />
        <div className='flex flex-col gap-[33px]'>
          <div className='flex flex-col items-center justify-center font-NotoSansKR font-medium text-Head7Mobile tablet:text-Head7Tablet desktop:text-Head7 text-black'>
            <h2>GDG on Campus 는 이런 분들과 함께 하고 싶어요!</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-6'>
            {TARGET.map((item, idx) => {
              const boldList = item.bold.split(",").map((s) => s.trim());
              return (
                <div key={idx} className='text-lg'>
                  <TargetComponent text={item.text} boldList={boldList} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-[1348px] tablet:h-[1558px] desktop:h-[1705px] py-[100px] gap-[72px] bg-gradient-blue-bottom-fade'>
        <TwoCircleComponent TwoCircle={PlanCircleData} />
        <div className='relative w-[300px] h-[747px] tablet:w-[657px] tablet:h-[1023px] desktop:w-[1094px] desktop:h-[1272px]'>
          <picture>
            <source srcSet='/images/png/RecruitDate_Desktop.png' media='(min-width: 1024px)' />
            <source srcSet='/images/png/RecruitDate_Tablet.png' media='(min-width: 768px)' />
            <Image src='/images/png/RecruitDate_Mobile.png' alt='Gdgoc 모집일정' fill className='object-contain' />
          </picture>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-[1148px] tablet:h-[1713px] dektop:h-[2144px] gap-[48px] tablet:gap-[146px] desktop:gap-[146px] box-border bg-gradient-blue-top-fade'>
        <span className='font-NotoSansKR font-bold text-Head6Moblie tablet:text-Head8Tablet desktop:text-Head8 text-black'>
          자주 묻는 질문
        </span>
        <div>
          <div className='relative w-[1074px] h-[245px] tablet:h-[431px] desktop:h-[508px]'>
            <picture>
              <source srcSet='/images/png/Question1_Desktop.png' media='(min-width: 1024px)' />
              <source srcSet='/images/png/Question1_Tablet.png' media='(min-width: 768px)' />
              <Image src='/images/png/Question1_Mobile.png' alt='Gdgoc 모집일정' fill className='object-contain' />
            </picture>
          </div>
          <div className='relative w-[1074px] h-[245px] tablet:h-[431px] desktop:h-[508px]'>
            <picture>
              <source srcSet='/images/png/Question2_Desktop.png' media='(min-width: 1024px)' />
              <source srcSet='/images/png/Question2_Tablet.png' media='(min-width: 768px)' />
              <Image src='/images/png/Question2_Mobile.png' alt='Gdgoc 모집일정' fill className='object-contain' />
            </picture>
          </div>
          <div className='relative w-[1074px] h-[245px] tablet:h-[431px] desktop:h-[508px]'>
            <picture>
              <source srcSet='/images/png/Question3_Desktop.png' media='(min-width: 1024px)' />
              <source srcSet='/images/png/Question3_Tablet.png' media='(min-width: 768px)' />
              <Image src='/images/png/Question3_Mobile.png' alt='Gdgoc 모집일정' fill className='object-contain' />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
