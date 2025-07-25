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
      <div className='flex flex-col items-center justify-center w-full h-[976px] p-[100px] gap-[72px] box-border bg-conic-custom'>
        <TwoCircleComponent TwoCircle={PartCircleData} />
        <div className='flex gap-[60px] justify-center'>
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
      <div className='flex flex-col items-center justify-center w-full h-[902px] p-[100px] gap-[52px] box-border'>
        <TwoCircleComponent TwoCircle={TargetCircleData} />
        <div>
          <span className='font-NotoSansKR font-medium text-Head7 text-black'>
            GDG on Campus 는 이런 분들과 함께 하고 싶어요!
          </span>
          <div className='mt-4 flex flex-col gap-2'>
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
      <div className='flex flex-col items-center justify-center w-full h-[1505px] p-[100px] gap-[72px] bg-gradient-blue-bottom-fade'>
        <TwoCircleComponent TwoCircle={PlanCircleData} />
        <div className='relative w-[1094px] h-[1272px]'>
          <Image src='/images/png/RecruitDate.png' alt='Gdgoc 모집일정' fill className='object-cover' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-[2144px] gap-[146px] box-border bg-gradient-blue-top-fade'>
        <span className='font-NotoSansKR font-bold text-Head8 text-black'>자주 묻는 질문</span>
        <div>
          <div style={{ position: "relative", width: "1200px", height: "508px" }}>
            <Image src='/images/png/Question1.png' alt='자주 묻는 질문1' fill className='object-cover' />
          </div>
          <div style={{ position: "relative", width: "1200px", height: "508px" }}>
            <Image src='/images/png/Question2.png' alt='자주 묻는 질문2' fill className='object-cover' />
          </div>
          <div style={{ position: "relative", width: "1200px", height: "508px" }}>
            <Image src='/images/png/Question3.png' alt='자주 묻는 질문3' fill className='object-cover' />
          </div>
        </div>
      </div>
    </>
  );
}
