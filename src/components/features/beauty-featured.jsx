'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import featured_1 from '@assets/img/product/featured/1.jpg';
import featured_2 from '@assets/img/product/featured/2.jpg';
import featured_3 from '@assets/img/product/featured/3.jpg';
import featured_4 from '@assets/img/product/featured/4.jpg';

import { ArrowRightSmTwo } from "@/svg";

// Featured data
const featured_data = [
  {
    id: 1,
    img: featured_1,
    title: <>200 grm Tin Can</>,
    // subtitle: 'Tin Can',
    save: 72,
    bgColor: '#D35F44',
    label: 'New',
    labelColor: '#DB6C2F',
  },
  {
    id: 2,
    img: featured_2,
    title: <>100 grm</>,
    // subtitle: 'Lorum Ipsum',
    save: 98,
    bgColor: '#DB6C2F',
    label: 'Limited Release',
    labelColor: '#E14829',
  },
  {
    id: 3,
    img: featured_3,
    title: <>375 grm</>,
    // subtitle: 'Lorum Ipsum',
    save: 133,
    bgColor: '#E14829',
    label: 'Best Seller',
    labelColor: '#D35F44',
  },
  {
    id: 4,
    img: featured_4,
    title: <>500 grm</>,
    // subtitle: 'Lorum Ipsum',
    save: 110,
    bgColor: '#D35F44',
    label: 'Best Seller',
    labelColor: '#DB6C2F',
  },
];


const BeautyFeatured = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const backgroundColor = hoveredId
    ? featured_data.find(item => item.id === hoveredId)?.bgColor
    : 'transparent';

  return (
<section
  className="tp-featured-product-area pt-70 pb-150 featured-section"
  style={{
    backgroundColor: hoveredId
      ? featured_data.find(item => item.id === hoveredId)?.bgColor
      : 'transparent',
    transition: 'background-color 0.3s ease',
  }}
>
  <div className="container">

    {/* Section Title */}
    <div className="row mb-40">
      <div className="col-12">
        <h2 className="tp-section-title-featured text-start">Featured Products</h2>
      </div>
    </div>

    {/* Featured Product Grid */}
    <div className="row gx-4 gy-4">
      {featured_data.map(item => (
        <div
          key={item.id}
          className={`col-lg-3 col-md-6 tp-featured-item-wrapper ${
            hoveredId === item.id ? 'hovered' : hoveredId ? 'not-hovered' : ''
          }`}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{ transition: 'all 0.3s ease' }}
        >
          <div
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              cursor: 'pointer',
              backgroundColor: '#f7f7f7',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              className="tp-featured-thumb-3"
              style={{
                position: 'relative',
                width: '100%',
                height: '300px',
                overflow: 'hidden',
                borderRadius: '10px 10px 0 0', // round top corners only
              }}
            >
              {/* Label at top-right */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: item.labelColor,
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  zIndex: 2,
                }}
              >
                {item.label}
              </div>

              <Image
                src={item.img}
                alt="featured image"
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
              />
            </div>

            {/* Gray text box just below image, no gap */}
            <div
              className="tp-featured-content-3 text-start"
              style={{
                padding: '15px 20px',
                borderRadius: '0 0 10px 10px', // round bottom corners
                margin: 0,
                flexGrow: 1,
              }}
            >
              <h3 className="tp-featured-title-3 mb-10" style={{ margin: 0 }}>
                <Link href="/shop" style={{ color: '#000', textDecoration: 'none' }}>
                  {item.title}
                </Link>
              </h3>
              <p className="tp-featured-subtitle" style={{ margin: 0, color: '#555' }}>
                {item.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Spacer */}
    <div className="spacer" style={{ height: '100px' }}></div>

    {/* Button */}
    <div className="row justify-content-end mb-55">
      <div className="col-lg-6 col-md-4 text-md-end text-start">
        <div className="tp-category-more-3">
          <Link href="/explore-shop" className="tp-btn">
            Explore Shop <ArrowRightSmTwo />
          </Link>
        </div>
      </div>
    </div>

  </div>
</section>




  );
};

export default BeautyFeatured;
