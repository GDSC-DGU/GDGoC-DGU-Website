/**
 * 모든 화면에 적용되는 Footer 컴포넌트입니다.
 * @author 동현
 */

export const Footer = () => {
  return (
    <footer className='bg-black text-white p-8'>
      <div className='max-w-6xl mx-auto space-y-8'>
        {/* About Us Section */}
        <div className='space-y-2'>
          <h3 className='text-xl font-bold'>About Us</h3>
          <p className='text-sm text-gray-300'>Final Update 2025.07.26</p>
        </div>

        {/* Contact Section */}
        <div className='space-y-2'>
          <h3 className='text-xl font-bold'>Contact</h3>
          <div className='text-sm text-gray-300 space-y-1'>
            <div className='flex'>
              <span className='w-16'>이메일</span>
              <span className='ml-4'>gdsc.dgu@gmail.com</span>
            </div>
            <div className='flex'>
              <span className='w-16'>주소</span>
              <span className='ml-4'>서울특별시 중구 필동로1길 30</span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='pt-4'>
          <p className='text-sm text-gray-300'>Copyright © GDSC DGU</p>
        </div>
      </div>
    </footer>
  );
};
