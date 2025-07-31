import Image from "next/image";

export default function RecruitSection1() {
  return (
    <div className='flex flex-col h-[717px] tablet:h-[1162px] desktop:h-[1162px] justify-center pt-[224px] tablet:pt-[273px] desktop:pt-[273px] pb-[130px] bg-black w-full gap-9 tablet:gap-[100px] desktop:gap-[100px]'>
      <div className='flex flex-col items-center h-[318px] gap-[72px]'>
        <div className='relative w-[125px] h-[60px] tablet:w-[200px] tablet:h-[97px] desktop:w-[281px] desktop:h-[136px]'>
          <Image
            src='/images/png/BigLogo.png'
            alt='GDGoC 로고 블러'
            fill
            style={{ filter: "blur(24px)" }}
            className='object-contain'
            priority
          />
          <Image
            src='/images/png/BigLogo.png'
            alt='GDGoC 로고'
            width={125}
            height={60}
            className='object-contain block tablet:hidden'
            priority
          />
          <Image
            src='/images/png/BigLogo.png'
            alt='GDGoC 로고'
            width={200}
            height={97}
            className='object-contain hidden tablet:block desktop:hidden'
            priority
          />
          <Image
            src='/images/png/BigLogo.png'
            alt='GDGoC 로고'
            width={281}
            height={136}
            className='object-contain hidden desktop:block'
            priority
          />
        </div>
        <div className='flex flex-col gap-4 justify-center items-center text-white text-center'>
          <h1 className='font-NotoSansKR font-normal text-Head4Mobile tablet:text-Head4Tablet desktop:text-Head4'>
            Google Developer Group on Campus
          </h1>
          <h2 className='font-NotoSansKR font-normal text-Head5Mobile tablet:text-Head5Tablet desktop:text-Head5'>
            Dongguk University
          </h2>
        </div>
      </div>
      <div className='flex flex-col gap-9 justify-center items-center'>
        <Image src='/images/svg/Line.svg' alt='그라데이션 선' width={2} height={215} priority />
        <div className='font-NotoSansKR font-medium text-Head6Mobile tablet:text-Head6Tablet desktop:text-Head6'>
          3rd Recruitment
        </div>
      </div>
    </div>
  );
}
