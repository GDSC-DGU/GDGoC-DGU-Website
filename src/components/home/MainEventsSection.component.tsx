"use client";

import { ActivityCard } from "@/src/components/card/ActivityCard.component";
import { TwoCircleComponent } from "@/src/components/page/TwoCircle.components";
import { useMainEventQuery } from "@/src/lib/query/useMainEventQuery";

/**
 * 메인 이벤트 섹션 컴포넌트
 * 타임라인 형태로 메인 이벤트들을 표시합니다.
 * 노션 데이터베이스에서 이벤트 정보를 가져와 표시합니다.
 * @author 동현
 */

export const MainEventsSection = () => {
  const { data: mainEvents, isLoading, isError } = useMainEventQuery();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;
  if (!mainEvents || mainEvents.length === 0) return null;

  return (
    <section className='flex flex-col items-center justify-center gap-8 mb-32 p-10 w-full'>
      <TwoCircleComponent
        TwoCircle={{
          circleColor: "border-green",
          text: "Main Events",
          textColor: "text-green",
          size: 230,
          textSize: 20,
        }}
      />

      {/* 타임라인 컨테이너 */}
      <div className='relative w-full max-w-5xl'>
        {/* 타임라인 연결선 (데스크탑용) */}
        <div className='absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden tablet:block bg-gradient-to-b from-white via-green to-white' />

        {/* 이벤트 카드들 */}
        <div>
          {mainEvents.map((event, index) => (
            <div key={event.id} className='relative'>
              {/* 타임라인 연결점 (데스크탑용) */}
              <div className='absolute left-1/2 top-1/2 w-4 h-4 bg-green rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden tablet:block z-20' />

              {/* 카드 컨테이너 */}
              <div className='flex items-center'>
                {/* 왼쪽 카드 영역 (짝수 인덱스) */}
                {index % 2 === 0 && (
                  <>
                    <div className='flex-1 flex justify-start -ml-[7.1rem] hidden tablet:flex'>
                      <div className='max-w-sm w-full'>
                        <ActivityCard src={event.imageSrc} title={event.title} content={event.content} />
                      </div>
                    </div>

                    {/* 왼쪽으로 향하는 가로 연결선 */}
                    <div className='absolute left-1/2 top-1/2 w-32 h-1 bg-green transform -translate-y-1/2 -translate-x-full hidden tablet:block z-10' />
                  </>
                )}

                {/* 중앙 타임라인 공간 */}
                <div className='w-1 hidden tablet:block' />

                {/* 오른쪽 카드 영역 (홀수 인덱스) */}
                {index % 2 === 1 && (
                  <>
                    {/* 오른쪽으로 향하는 가로 연결선 */}
                    <div className='absolute left-1/2 top-1/2 w-32 h-1 bg-green transform -translate-y-1/2 hidden tablet:block z-10' />

                    <div className='flex-1 flex justify-start pl-[40rem] hidden tablet:flex'>
                      <div className='max-w-sm w-full'>
                        <ActivityCard src={event.imageSrc} title={event.title} content={event.content} />
                      </div>
                    </div>
                  </>
                )}

                {/* 모바일용 카드 (항상 표시) */}
                <div className='w-full flex flex-col justify-center items-center tablet:hidden'>
                  <div className='max-w-sm w-full flex justify-center items-center'>
                    <ActivityCard src={event.imageSrc} title={event.title} content={event.content} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
