import Wrapper from "@/layout/wrapper";
// import HeaderTwo from "@/layout/headers/header-2";
// import HeaderThree from "@/layout/headers/header-3";
import HeaderFive from "@/layout/headers/header-5";
import Footer from "@/layout/footers/footer";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
// import ShopArea from "@/components/shop/shop-area";
import NewShopArea from "@/components/shop/new-shop-area";

export const metadata = {
  title: "Shofy - Shop Page",
};

export default function ShopPage() {
  return (
    <Wrapper>
      <HeaderFive style_2={true} />
      <ShopBreadcrumb title="Shop Grid" subtitle="Shop Grid" />
      <NewShopArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
}
