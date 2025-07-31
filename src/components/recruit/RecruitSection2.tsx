import Image from "next/image";

export default function RecruitSection2() {
  return (
    <div className='flex flex-col justify-center w-full'>
      <div className='relative w-[1440] h-[908px]'>
        <Image src='/images/png/GroupImage.png' alt='Gdgoc 단체사진' fill className='object-cover' priority />
      </div>

      <div className='relative w-[1434] h-[115px] tablet:h-[157px] desktop:h-[425px]'>
        <Image src='/images/png/GroupImage_blur.png' alt='Gdgoc 단체사진 하단' fill className='object-cover' priority />
      </div>
    </div>
  );
}
