import TopRightIllustration from "./TopRightIllustration";
import BottomRightIllustration from "./BottomRightIllustration";

export default function HeroIllustrationZones() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="container-main relative w-full h-full">
        {/* Top Right Illustration Zone (Cloud/API/SaaS/AI) */}
        <div className="absolute top-12 right-0 w-[30%] max-w-[300px] h-[35vh] hidden lg:flex">
          <TopRightIllustration />
        </div>

        {/* Bottom Right Illustration Zone (Backend/DevOps/Automation) */}
        <div className="absolute bottom-12 right-0 w-[30%] max-w-[300px] h-[35vh] hidden lg:flex">
          <BottomRightIllustration />
        </div>
      </div>
    </div>
  );
}
