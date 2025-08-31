import { WeeklyProjectSection, WeeklySeminarSection, WeeklyStudySection } from "@/src/components/home";
import { TwoCircleComponent } from "@/src/components/page/TwoCircle.components";

import { RevealOnScroll } from "../RevealOnScroll.component";

export const WeeklyActivitesSection = () => {
  return (
    <section className='flex flex-col items-center gap-24 tablet:p-10 mobile:w-full'>
      <RevealOnScroll>
        <TwoCircleComponent
          TwoCircle={{
            circleColor: "border-blue",
            text: "Weekly Activities",
            textColor: "text-blue",
            size: 230,
            textSize: 20,
          }}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <WeeklySeminarSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <WeeklyProjectSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <WeeklyStudySection />
      </RevealOnScroll>
      {/* <WeeklyTechblogSection /> */}
    </section>
  );
};
