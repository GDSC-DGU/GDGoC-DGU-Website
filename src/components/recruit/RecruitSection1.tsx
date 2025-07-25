import Image from "next/image";

export default function RecruitSection1() {
  return (
    <div className='flex flex-col h-[1162px] justify-center pt-[273px] pb-[191px] bg-black w-full gap-[100px]'>
      <div className='flex flex-col items-center h-[318px] gap-[72px]'>
        <div className='relative w-[281px] h-[136px]'>
          <Image
            src='/images/png/BigLogo.png'
            alt='GDGoC 로고 블러'
            fill
            style={{ filter: "blur(34px)" }}
            className='object-contain'
            priority
          />
          <Image
            src='/images/png/BigLogo.png'
            alt='GDGoC 로고'
            width={281}
            height={136}
            className='object-contain'
            priority
          />
        </div>
        <div className='flex flex-col gap-4 justify-center items-center text-white text-center'>
          <h1 className='font-NotoSansKR font-normal text-Head4'>Google Developer Group on Campus</h1>
          <h2 className='font-NotoSansKR font-normal text-Head5'>Dongguk University</h2>
        </div>
      </div>
      <div className='flex flex-col gap-9 justify-center items-center'>
        <Image src='/images/svg/Line.svg' alt='그라데이션 선' width={2} height={215} priority />
        <div className='font-NotoSansKR font-medium text-Head6'>3rd Recruitment</div>
      </div>
    </div>
  );
}
