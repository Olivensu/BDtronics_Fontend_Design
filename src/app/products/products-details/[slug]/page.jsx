import ProductDetails from "@/components/product-details/product-details-main";
import { Products_END_POINT } from "@/service-pattern/api-data-service-gpfi-revamp";
import { GET_GPFI_Revamp } from "@/service-pattern/api-request-service-gpfi-revamp";

const Home = async ({ params }) => {
  const { slug } = params; // Extract the slug from the route parameters

  let matchedProduct = null;

  try {
    // Fetch all products from the API
    const response = await GET_GPFI_Revamp({ URL: Products_END_POINT });
    const products = response.data.data; // Assuming the API returns an array of products

    console.log("Products", products);

    // Find the product that matches the slug
    matchedProduct = products.find((product) => product.id === slug);

    if (!matchedProduct) {
      console.log("Product not found for slug:", slug);
    }
  } catch (error) {
    console.log("Error fetching products:", error);
  }

  return (
    <div className="max-w-[1280px] mx-auto my-5">
      {/* Pass the matched product to the ProductDetails component */}
      <ProductDetails product_data={matchedProduct} />
    </div>
  );
};

export default Home;