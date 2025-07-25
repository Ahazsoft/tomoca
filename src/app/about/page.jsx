import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
// import BeautyBanner from "@/components/banner/beauty-banner";
import AboutBanner from "@/components/banner/about-banner";
import BeautyCategory from "@/components/categories/beauty-category";
import BeautyFeatured from "@/components/features/beauty-featured";
import StoreLocater from "@/components/features/store-locator";
import Events from "@/components/features/events";
import About from "@/components/features/aboutsection";
import Newsletter from "@/components/features/newsletter";
import ProductArea from "@/components/products/beauty/product-area";
import BeautyOfferBanner from "@/components/offer-banner/beauty-offer-banner";
import ProductAreaTwo from "@/components/products/beauty/product-area-2";
import TrendingSpecialPrd from "@/components/products/beauty/trending-special-prd";
import BeautyTestimonial from "@/components/testimonial/beauty-testimonial";
import FeatureAreaTwo from "@/components/features/feature-area-2";
import InstagramAreaThree from "@/components/instagram/instagram-area-3";
import Footer from "@/layout/footers/footer";

export const metadata = {
  title: "Tomoca - Demo Website",
};

export default function AboutPageThree() {
  return (
    <Wrapper>
      <HeaderThree />
      <AboutBanner />
      {/* <BeautyCategory /> */}
      {/* <BeautyFeatured /> */}
      {/* <StoreLocater/> */}
      <About/>
      {/* <Newsletter/> */}

      {/* <ProductArea /> */}
      {/* <BeautyOfferBanner /> */}
      {/* <ProductAreaTwo /> */}
      {/* <TrendingSpecialPrd /> */}
      {/* <BeautyTestimonial /> */}
      {/* <FeatureAreaTwo /> */}
      {/* <InstagramAreaThree /> */}
      <Footer style_3={true} />
    </Wrapper>
  );
}
