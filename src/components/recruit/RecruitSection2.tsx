import Image from "next/image";

export default function RecruitSection2() {
  return (
    <div className='flex flex-col h-[1333px] justify-center w-full'>
      <div className='relative w-full h-[908px]'>
        <Image src='/images/png/GroupImage.png' alt='Gdgoc 단체사진' fill className='object-cover' priority />
      </div>

      <div className='relative w-full h-[425px]'>
        <Image src='/images/png/GroupImage_blur.png' alt='Gdgoc 단체사진 하단' fill className='object-cover' priority />
      </div>
    </div>
  );
}
