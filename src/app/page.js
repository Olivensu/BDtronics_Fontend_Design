import Banner1 from "@/components/LandingPage/Banner1";
import { PopularCategories } from "@/components/LandingPage/PopularCategories";


export default function Home() {
  return (
    <div className="mx-auto p-5 max-w-[1280px] ">
      <Banner1></Banner1>
      <PopularCategories></PopularCategories>
    </div>
  );
}
