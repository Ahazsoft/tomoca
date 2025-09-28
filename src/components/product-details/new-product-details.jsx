'use client';
import React from "react";
import ProductDetailsBreadcrumb from "../breadcrumb/product-details-breadcrumb";
import ProductDetailsContent from "./product-details-content";
import ErrorMsg from "../common/error-msg";
import normalizeProduct from "../utils/normalizeProduct";

// Import product images
import featured_1 from '@assets/img/product/featured/1.jpg';
import featured_2 from '@assets/img/product/featured/2.jpg';
import featured_3 from '@assets/img/product/featured/3.jpg';
import featured_4 from '@assets/img/product/featured/4.jpg';
import featured_5 from '@assets/img/product/featured/5.jpg';
import featured_6 from '@assets/img/product/featured/6.jpg';
import featured_7 from '@assets/img/product/featured/7.jpg';
import featured_8 from '@assets/img/product/featured/8.jpg';
import featured_9 from '@assets/img/product/featured/9.jpg';

// Local product data
const allProducts = [
  {
    id: 1,
    img: featured_1,
    title: "Tin Can Ground Coffee",
    subtitle: "200 grm",
    price: 72,
    discount: 0,
    status: "in-stock",
    parent: "Coffee",
    children: "ground",
    brand: { name: "Tomoca" },
    imageURLs: [{ img: featured_1, color: { name: "brown", clrCode: "#5C4033" } }],
    createdAt: "2025-08-01T00:00:00Z"
  },
  {
    id: 2,
    img: featured_2,
    title: "Beans / Ground Coffee",
    subtitle: "100 grm",
    price: 98,
    discount: 10,
    status: "in-stock",
    parent: "Coffee",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [{ img: featured_2, color: { name: "dark", clrCode: "#333333" } }],
    createdAt: "2025-07-25T00:00:00Z"
  },
  {
    id: 3,
    img: featured_3,
    title: "Beans / Ground Coffee",
    subtitle: "375 grm",
    price: 133,
    discount: 0,
    status: "in-stock",
    parent: "Coffee",
    children: "ground",
    brand: { name: "Tomoca" },
    imageURLs: [{ img: featured_3, color: { name: "black", clrCode: "#000000" } }],
    createdAt: "2025-06-20T00:00:00Z"
  },
  {
    id: 4,
    img: featured_4,
    title: "Bean / Ground Coffee",
    subtitle: "500 grm",
    price: 110,
    discount: 15,
    status: "in-stock",
    parent: "Coffee",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [{ img: featured_4, color: { name: "dark brown", clrCode: "#654321" } }],
    createdAt: "2025-09-01T00:00:00Z"
  },
  {
    id: 5,
    img: featured_5,
    title: "Tote Bag",
    subtitle: "500 grm",
    price: 110,
    discount: 15,
    status: "in-stock",
    parent: "Bags",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [{ img: featured_5, color: { name: "dark brown", clrCode: "#654321" } }],
    createdAt: "2025-09-01T00:00:00Z"
  },
  {
    id: 6,
    img: featured_6,
    title: "TShirt",
    subtitle: "500 grm",
    price: 110,
    discount: 15,
    status: "in-stock",
    parent: "Clothes",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [{ img: featured_6, color: { name: "dark brown", clrCode: "#654321" } }],
    createdAt: "2025-09-01T00:00:00Z"
  },
  {
    id: 7,
    img: featured_7,
    title: "Bialetti",
    subtitle: "500 grm",
    price: 110,
    discount: 15,
    status: "in-stock",
    parent: "Items",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [{ img: featured_7, color: { name: "dark brown", clrCode: "#654321" } }],
    createdAt: "2025-09-01T00:00:00Z"
  },
  {
    id: 8,
    img: featured_8,
    title: "Tote Bag #1",
    subtitle: "500 grm",
    price: 110,
    discount: 15,
    status: "in-stock",
    parent: "Bags",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [{ img: featured_8, color: { name: "dark brown", clrCode: "#654321" } }],
    createdAt: "2025-09-01T00:00:00Z"
  },
  {
    id: 9,
    img: featured_9,
    title: "Tote Bag #2",
    subtitle: "500 grm",
    price: 110,
    discount: 15,
    status: "in-stock",
    parent: "Bags",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [{ img: featured_9, color: { name: "dark brown", clrCode: "#654321" } }],
    createdAt: "2025-09-01T00:00:00Z"
  }
];

const NewProductDetailsArea = ({ id }) => {
  const numericId = parseInt(id);
  const product = allProducts.find(p => p.id === numericId);

  if (!product) {
    return <ErrorMsg msg="Product not found." />;
  }

  const normalizedProduct = normalizeProduct(product);

  return (
    <>
      <ProductDetailsBreadcrumb
        category={normalizedProduct.category?.name || "Uncategorized"}
        title={normalizedProduct.title}
      />
      <ProductDetailsContent productItem={normalizedProduct} />
    </>
  );
};

export default NewProductDetailsArea;
