import { AllBrand } from "@/components/LandingPage/AllBrand";
import Banner1 from "@/components/LandingPage/Banner1";
import { PopularCategories } from "@/components/LandingPage/PopularCategories";
import { PopularProduct } from "@/components/LandingPage/PopularProduct";
import { Reviews } from "@/components/LandingPage/Reviews";
import { Home_Page_Banners,Categories_END_POINT, Brands_END_POINT, Products_END_POINT } from "@/service-pattern/api-data-service-gpfi-revamp";
import { GET_GPFI_Revamp } from "@/service-pattern/api-request-service-gpfi-revamp";

const Home = async () => {
  let dataToBeSent = {
    banner_data: null,
    categories_data: null,
    brand_data: null,
    product_data: null,
  };

  try {
    const data = await GET_GPFI_Revamp({
      URL: Home_Page_Banners,
    });
    dataToBeSent.banner_data = data.data;
  } catch (error) {
    console.log("errors+++++++++++++++++++", error);
  }

  try {
    const data = await GET_GPFI_Revamp({
      URL: Categories_END_POINT,
    });
    dataToBeSent.categories_data = data.data;
  } catch (error) {
    console.log("errors+++++++++++++++++++", error);
  }

  try {
    const data = await GET_GPFI_Revamp({
      URL: Brands_END_POINT,
    });
    dataToBeSent.brand_data = data.data;
  } catch (error) {
    console.log("errors+++++++++++++++++++", error);
  }

  try {
    const data = await GET_GPFI_Revamp({
      URL: Products_END_POINT,
    });
    dataToBeSent.product_data = data.data;
  } catch (error) {
    console.log("errors+++++++++++++++++++", error);
  }

  return (
    <div className="mx-auto p-5 max-w-[1280px] ">
      {dataToBeSent.banner_data?<Banner1 {...{ dataToBeSent }} />:<></>}
      {dataToBeSent.categories_data?<PopularCategories {...{ dataToBeSent }}/>:<></>}
      {dataToBeSent.brand_data?<AllBrand {...{ dataToBeSent }}/>:<></>}
      <PopularProduct {...{ dataToBeSent }}/>
      <Reviews />
    </div>
  );
};

export default Home;
