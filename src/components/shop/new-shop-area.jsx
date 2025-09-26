'use client';
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import ShopLoader from "../loader/shop/shop-loader";
import ErrorMsg from "../common/error-msg";
import ShopFilterOffCanvas from "../common/shop-filter-offcanvas";
import ShopContent from "./shop-content";

import featured_1 from '@assets/img/product/featured/1.jpg';
import featured_2 from '@assets/img/product/featured/2.jpg';
import featured_3 from '@assets/img/product/featured/3.jpg';
import featured_4 from '@assets/img/product/featured/4.jpg';
import featured_5 from '@assets/img/product/featured/5.jpg';
import featured_6 from '@assets/img/product/featured/6.jpg';
import featured_7 from '@assets/img/product/featured/7.jpg';
import featured_8 from '@assets/img/product/featured/8.jpg';
import featured_9 from '@assets/img/product/featured/9.jpg';


// Local product data (instead of fetching from backend)
const allProducts = [
  {
    id: 1,
    img: featured_1,
    title: "Tin Can Ground Coffee",
    subtitle: "200 grm",
    price: 72,
    discount: 0,
    status: "in-stock",
    parent: "coffee",
    children: "ground",
    brand: { name: "Tomoca" },
    imageURLs: [
      {
        url: featured_1,
        color: { name: "brown" }
      }
    ],
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
    parent: "coffee",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [
      {
        url: featured_2,
        color: { name: "dark" }
      }
    ],
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
    parent: "coffee",
    children: "ground",
    brand: { name: "Tomoca" },
    imageURLs: [
      {
        url: featured_3,
        color: { name: "black" }
      }
    ],
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
    parent: "coffee",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [
      {
        url: featured_4,
        color: { name: "dark brown" }
      }
    ],
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
    parent: "coffee",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [
      {
        url: featured_5,
        color: { name: "dark brown" }
      }
    ],
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
    parent: "coffee",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [
      {
        url: featured_6,
        color: { name: "dark brown" }
      }
    ],
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
    parent: "coffee",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [
      {
        url: featured_7,
        color: { name: "dark brown" }
      }
    ],
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
    parent: "coffee",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [
      {
        url: featured_8,
        color: { name: "dark brown" }
      }
    ],
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
    parent: "coffee",
    children: "beans",
    brand: { name: "Tomoca" },
    imageURLs: [
      {
        url: featured_9,
        color: { name: "dark brown" }
      }
    ],
    createdAt: "2025-09-01T00:00:00Z"
  },
];

const NewShopArea = ({ shop_right = false, hidden_sidebar = false }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get('category');
  const brand = searchParams.get('brand');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const subCategory = searchParams.get('subCategory');
  const filterColor = searchParams.get('color');
  const status = searchParams.get('status');

  const [priceValue, setPriceValue] = useState([0, 0]);
  const [selectValue, setSelectValue] = useState("");
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    const maxPrice = allProducts.reduce((max, product) => {
      return product.price > max ? product.price : max;
    }, 0);
    setPriceValue([0, maxPrice]);
  }, []);

  const handleChanges = (val) => {
    setCurrPage(1);
    setPriceValue(val);
  };

  const selectHandleFilter = (e) => {
    setSelectValue(e.value);
  };

  const otherProps = {
    priceFilterValues: {
      priceValue,
      handleChanges,
      setPriceValue,
    },
    selectHandleFilter,
    currPage,
    setCurrPage,
  };

  // Start filtering logic
  let product_items = [...allProducts];

  if (selectValue) {
    switch (selectValue) {
      case "Low to High":
        product_items.sort((a, b) => a.price - b.price);
        break;
      case "High to Low":
        product_items.sort((a, b) => b.price - a.price);
        break;
      case "New Added":
        product_items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "On Sale":
        product_items = product_items.filter((p) => p.discount > 0);
        break;
      default:
        break;
    }
  }

  if (status) {
    if (status === "on-sale") {
      product_items = product_items.filter((p) => p.discount > 0);
    } else if (status === "in-stock") {
      product_items = product_items.filter((p) => p.status === "in-stock");
    }
  }

  if (category) {
    product_items = product_items.filter(
      (p) =>
        p.parent.toLowerCase().replace("&", "").split(" ").join("-") === category
    );
  }

  if (subCategory) {
    product_items = product_items.filter(
      (p) =>
        p.children.toLowerCase().replace("&", "").split(" ").join("-") === subCategory
    );
  }

  if (filterColor) {
    product_items = product_items.filter((product) =>
      product.imageURLs.some(
        (img) =>
          img.color?.name.toLowerCase().split(" ").join("-") === filterColor
      )
    );
  }

  if (brand) {
    product_items = product_items.filter(
      (p) =>
        p.brand.name.toLowerCase().split(" ").join("-").replace("&", "") === brand
    );
  }

  if (minPrice && maxPrice) {
    product_items = product_items.filter(
      (p) => p.price >= Number(minPrice) && p.price <= Number(maxPrice)
    );
  }

  // Content rendering
  let content = null;

  if (product_items.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  } else {
    content = (
      <>
        <ShopContent
          all_products={allProducts}
          products={product_items}
          otherProps={otherProps}
          shop_right={shop_right}
          hidden_sidebar={hidden_sidebar}
        />
        <ShopFilterOffCanvas
          all_products={allProducts}
          otherProps={otherProps}
        />
      </>
    );
  }

  return <>{content}</>;
};

export default NewShopArea;
