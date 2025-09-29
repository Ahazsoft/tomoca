import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import HeaderFive from "@/layout/headers/header-5";
import BlogBreadcrumb from "@/components/breadcrumb/blog-breadcrumb";
import BlogPostboxArea from "@/components/blog/blog-postox/blog-postbox-area";
import Footer from "@/layout/footers/footer";

export const metadata = {
  title: "Shofy - Blog Page",
};

export default function BlogPage() {
  return (
    <Wrapper>
      <HeaderFive/>
      <BlogBreadcrumb />
      <BlogPostboxArea />
      <Footer style_3={true} />
    </Wrapper>
  );
}
