import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import HeaderThree from "@/layout/headers/header-3";
import Footer from "@/layout/footers/footer";
import BlogDetailsArea from "@/components/blog-details/blog-details-area";
import blogData from "@/data/blog-data";

import HeaderFive from "@/layout/headers/header-5";
export const metadata = {
  title: "Shofy - Blog Details Page",
};

export default function BlogDetailsPage() {
  return (
    <Wrapper>
      <HeaderFive />
      <BlogDetailsArea blog={blogData[4]} />
      <Footer style_3={true} />
    </Wrapper>
  );
}
