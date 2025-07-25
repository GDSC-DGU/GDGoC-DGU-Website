import Image from "next/image";
import Link from "next/link";

export default function RecruitSection4() {
  return (
    <>
      <div className='flex flex-col items-center h-[774px] pt-[273px] justify-center box-border bg-black w-full'>
        <div className='relative w-[281px] h-[136px]'>
          <Image
            src='/images/png/BigLogo.png'
            alt='GDGoC 로고 블러'
            fill
            style={{ filter: "blur(34px)" }}
            className='object-contain'
          />
          <Image src='/images/png/BigLogo.png' alt='GDGoC 로고' width={281} height={136} className='object-contain' />
        </div>
        <div className='flex flex-col h-[774px] items-center justify-center relative pt-[57px] gap-[100px]'>
          <div className='flex flex-col gap-4 justify-center items-center text-white text-center'>
            <h1 className='font-NotoSansKR font-normal text-Head4'>GDG On Campus에서 당신의 꿈을 펼쳐보세요!</h1>
            <h2 className='font-NotoSansKR font-normal text-Head5'>GDG On Campus DGU는 여러분을 기다립니다</h2>
          </div>
          <div className='relative inline-flex rounded-full p-[3px] overflow-hidden w-[208px] h-[67px] box-border'>
            <div
              className='absolute inset-0 z-10 rounded-full bg-gradient-to-r from-red-500-P via-yellow-500 via-green-500 to-blue-500'
              style={{
                top: 0,
                left: 0,
                transformOrigin: "center",
              }}
            />
            <button className='relative z-20 flex items-center justify-center w-[202px] h-[61px] rounded-full bg-black text-gray-300 hover:bg-gray-800 px-8 py-3 font-NotoSansKR font-bold text-Body6'>
              <Link href='/recruit'>지원하기</Link>
            </button>
          </div>
        </div>
      </div>
      <div className='relative w-full bg-black pt-[127px] pb-[441px]'>
        <div className='relative w-full h-[466px] overflow-hidden'>
          <Image src='/images/svg/RecruitBottom.svg' alt='리크루트 바텀이미지' fill className='object-cover' />
        </div>
      </div>
    </>
  );
}
