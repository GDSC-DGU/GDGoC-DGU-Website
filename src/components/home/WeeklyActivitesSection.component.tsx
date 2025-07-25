import {
  WeeklyProjectSection,
  WeeklySeminarSection,
  WeeklyStudySection,
  WeeklyTechblogSection,
} from "@/src/components/home";
import { TwoCircleComponent } from "@/src/components/page/TwoCircle.components";

export const WeeklyActivitesSection = () => {
  return (
    <section className='flex flex-col items-center gap-8 tablet:p-10 mobile:w-full'>
      <TwoCircleComponent
        TwoCircle={{
          circleColor: "border-blue",
          text: "Weekly Activities",
          textColor: "text-blue",
          size: 230,
          textSize: 20,
        }}
      />
      <WeeklySeminarSection />
      <WeeklyProjectSection />
      <WeeklyStudySection />
      <WeeklyTechblogSection />
    </section>
  );
};
