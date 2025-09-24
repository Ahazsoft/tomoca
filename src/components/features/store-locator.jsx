'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightSmTwo } from '@/svg';

// internal image imports
import featured_1 from '@assets/img/product/featured/featured-7.jpg';
import featured_2 from '@assets/img/product/featured/featured-8.jpg';
import featured_3 from '@assets/img/product/featured/featured-9.jpg';

const featured_data = [
  {
    id: 1,
    img: featured_1,
    title: <>Historical - Piassa</>,
    subtitle: 'Wawel St, Addis Ababa',
  },
  {
    id: 2,
    img: featured_2,
    title: <>Bole - Airport Area</>,
    subtitle: 'Bole Rd, Addis Ababa',
  },
  {
    id: 3,
    img: featured_3,
    title: <>Old Airport - Diplomatic Hub</>,
    subtitle: 'Debrezeit Rd, Addis Ababa',
  },
];

const StoreLocater = () => {
  return (
    <section className="tp-featured-product-area pt-70 pb-150 store-section">
      <div className="container">

        {/* Section Title */}
        <div className="row mb-40">
          <div className="col-12 text-center">
            <h2 className="tp-section-title-store text-4xl font-bold">Store Locator</h2>
            <p className="text-gray-600 mt-2">Find Tomoca Stores around Addis Ababa</p>
          </div>
        </div>

        {/* Store Cards */}
        <div className="row gx-4 gy-4">
          {featured_data.map(item => (
            <div key={item.id} className="col-lg-4 col-md-6">
              {/* Image */}
              <div className="tp-featured-thumb-3 relative w-full h-64 rounded-lg overflow-hidden shadow-md group">
                <Image
                  src={item.img}
                  alt="featured image"
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                  className="group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="tp-featured-content-3 text-center mt-4">
                <h3 className="tp-featured-title-3 text-xl font-semibold">
                  <Link href="#" className="hover:text-blue-600">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600">{item.subtitle}</p>

                {/* ✅ View Location Button using your familiar style */}
                <div className="mt-4 tp-category-more-3">
                  <Link href="#" className="tp-btn">
                    View Location <ArrowRightSmTwo />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="spacer" style={{ height: '100px' }}></div>

        {/* ✅ Bottom Global Button (unchanged) */}
        {/* <div className="row mb-55">
          <div className="col-12 text-center">
            <h3 className="tp-locate-store-title text-2xl font-semibold mb-4">Looking for a store near you?</h3>
            <div className="mt-4 tp-category-more-3">
                  <Link href="#" className="tp-btn">
                    Find a Store Near You <ArrowRightSmTwo />
                  </Link>
                </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default StoreLocater;
