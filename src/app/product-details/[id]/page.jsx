import Wrapper from "@/layout/wrapper";
// import HeaderTwo from "@/layout/headers/header-2";
// import HeaderThree from "@/layout/headers/header-3";
import HeaderFive from "@/layout/headers/header-5";
// import ProductDetailsArea from "@/components/product-details/product-details-area";
import NewProductDetailsArea from "@/components/product-details/new-product-details";
import Footer from "@/layout/footers/footer";

export const metadata = {
  title: "Shofy - Product Details Page",
};

export default function ProductDetailsPage({ params }) {
  return (
    <Wrapper>
      <HeaderFive />
      {/* <ProductDetailsArea id={params.id} /> */}
      <NewProductDetailsArea id={params.id} />
      <Footer style_3={true} />
    </Wrapper>
  );
}
