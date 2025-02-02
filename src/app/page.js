import { AllBrand } from "@/components/LandingPage/AllBrand";
import Banner1 from "@/components/LandingPage/Banner1";
import { PopularCategories } from "@/components/LandingPage/PopularCategories";
import { PopularProduct } from "@/components/LandingPage/PopularProduct";
import { Reviews } from "@/components/LandingPage/Reviews";
import { Home_Page_Banners } from "@/service-pattern/api-data-service-gpfi-revamp";
import { GET_GPFI_Revamp } from "@/service-pattern/api-request-service-gpfi-revamp";


export default Home = async () => {
  try {
    const data = await GET_GPFI_Revamp({
        URL: Home_Page_Banners,
      })

  } catch (error) {
    console.log('errors+++++++++++++++++++', error);
  }
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
