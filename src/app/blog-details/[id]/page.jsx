import React from "react";
import HeaderTwo from "@/layout/headers/header-2";
import HeaderThree from "@/layout/headers/header-3";
import HeaderFive from "@/layout/headers/header-5";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import BlogDetailsArea from "@/components/blog-details/blog-details-area";
import blogData from "@/data/blog-data";

const BlogDetails = ({ params }) => {
  const blogItem = blogData.find((b) => Number(b.id) === Number(params.id));
  return (
    <Wrapper>
      <HeaderFive />
      <BlogDetailsArea blog={blogItem} />
      <Footer style_3={true} />
    </Wrapper>
  );
};

export default BlogDetails;
