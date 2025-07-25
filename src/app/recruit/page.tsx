import RecruitSection1 from "@/src/components/recruit/RecruitSection1";
import RecruitSection2 from "@/src/components/recruit/RecruitSection2";
import RecruitSection3 from "@/src/components/recruit/RecruitSection3";
import RecruitSection4 from "@/src/components/recruit/RecruitSection4";

export default function Recruit() {
  return (
    <div>
      <RecruitSection1 />
      <RecruitSection2 />
      <RecruitSection3 />
      <div className='w-full h-[615px] bg-gradient-white-black' />
      <RecruitSection4 />
    </div>
  );
}
