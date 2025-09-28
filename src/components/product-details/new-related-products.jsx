'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ProductItem from '../products/beauty/product-item';
import ErrorMsg from '../common/error-msg';
import { HomeNewArrivalPrdLoader } from '../loader';

// images
import featured_1 from '@assets/img/product/featured/1.jpg';
import featured_2 from '@assets/img/product/featured/2.jpg';
import featured_3 from '@assets/img/product/featured/3.jpg';
import featured_4 from '@assets/img/product/featured/4.jpg';
import featured_5 from '@assets/img/product/featured/5.jpg';
import featured_6 from '@assets/img/product/featured/6.jpg';
import featured_7 from '@assets/img/product/featured/7.jpg';
import featured_8 from '@assets/img/product/featured/8.jpg';
import featured_9 from '@assets/img/product/featured/9.jpg';

const allProducts = [
  { id: 1, img: featured_1, title: 'Tin Can Ground Coffee', parent: 'coffee', imageURLs: [{ img: featured_1, color: { name: 'brown', clrCode: '#5C4033' } }] },
  { id: 2, img: featured_2, title: 'Beans / Ground Coffee', parent: 'coffee', imageURLs: [{ img: featured_2, color: { name: 'dark', clrCode: '#333333' } }] },
  { id: 3, img: featured_3, title: 'Beans / Ground Coffee', parent: 'coffee', imageURLs: [{ img: featured_3, color: { name: 'black', clrCode: '#000000' } }] },
  { id: 4, img: featured_4, title: 'Bean / Ground Coffee', parent: 'coffee', imageURLs: [{ img: featured_4, color: { name: 'dark brown', clrCode: '#654321' } }] },
  { id: 5, img: featured_5, title: 'Tote Bag', parent: 'bags', imageURLs: [{ img: featured_5, color: { name: 'dark brown', clrCode: '#654321' } }] },
  { id: 6, img: featured_6, title: 'TShirt', parent: 'clothes', imageURLs: [{ img: featured_6, color: { name: 'dark brown', clrCode: '#654321' } }] },
  { id: 7, img: featured_7, title: 'Bialetti', parent: 'items', imageURLs: [{ img: featured_7, color: { name: 'dark brown', clrCode: '#654321' } }] },
  { id: 8, img: featured_8, title: 'Tote Bag #1', parent: 'bags', imageURLs: [{ img: featured_8, color: { name: 'dark brown', clrCode: '#654321' } }] },
  { id: 9, img: featured_9, title: 'Tote Bag #2', parent: 'bags', imageURLs: [{ img: featured_9, color: { name: 'dark brown', clrCode: '#654321' } }] },
];

const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: '.tp-related-slider-button-next',
    prevEl: '.tp-related-slider-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
};

const NewRelatedProducts = ({ id }) => {
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === undefined || id === null) {
      // Wait until id is defined
      return;
    }

    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      console.warn('Invalid ID:', id);
      setRelatedProducts([]);
      setLoading(false);
      return;
    }

    const currentProduct = allProducts.find(p => p.id === numericId);
    if (!currentProduct) {
      setRelatedProducts([]);
      setLoading(false);
      return;
    }

    const related = allProducts.filter(
      p =>
        p.id !== currentProduct.id &&
        p.parent.toLowerCase() === currentProduct.parent.toLowerCase()
    );

    setRelatedProducts(related);
    setLoading(false);
  }, [id]);

  let content;

  if (relatedProducts === null) {
    // Still waiting for id
    content = <HomeNewArrivalPrdLoader loading={true} />;
  } else if (loading) {
    content = <HomeNewArrivalPrdLoader loading={true} />;
  } else if (relatedProducts.length === 0) {
    content = <ErrorMsg msg="No Related Products Found!" />;
  } else {
    content = (
      <Swiper
        {...slider_setting}
        modules={[Autoplay, Navigation]}
        className="tp-product-related-slider-active swiper-container mb-10"
      >
        {relatedProducts.map(item => (
          <SwiperSlide key={item.id}>
            <ProductItem product={item} primary_style={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return <div className="tp-product-related-slider">{content}</div>;
};

export default NewRelatedProducts;
