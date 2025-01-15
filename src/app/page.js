import { AllBrand } from "@/components/LandingPage/AllBrand";
import Banner1 from "@/components/LandingPage/Banner1";
import { PopularCategories } from "@/components/LandingPage/PopularCategories";
import { PopularProduct } from "@/components/LandingPage/PopularProduct";
import { Reviews } from "@/components/LandingPage/Reviews";


export default function Home() {
  return (
    <div className="mx-auto p-5 max-w-[1280px] ">
      <Banner1></Banner1>
      <PopularCategories></PopularCategories>
      <AllBrand></AllBrand>
      <PopularProduct></PopularProduct>
      <Reviews></Reviews>
    </div>
  );
}
