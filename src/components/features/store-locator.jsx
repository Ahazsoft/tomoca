'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightSmTwo } from '@/svg';

// internal image imports
// import featured_1 from '@assets/img/product/featured/featured-7.jpg';
// import featured_2 from '@assets/img/product/featured/featured-8.jpg';
// import featured_3 from '@assets/img/product/featured/featured-9.jpg';

import location1 from '@assets/img/locations/Lagare.jpg';
import location2 from '@assets/img/locations/WeloSefer.jpg';
import location3 from '@assets/img/locations/Sefer.jpg';
import location4 from '@assets/img/locations/Entoto.jpg';
import location5 from '@assets/img/locations/Bishoftu.JPG';
import location6 from '@assets/img/locations/Historical.jpg';


const featured_data = [
  {
    id: 1,
    img: location1,
    title: <>Laureate Tsegaye Gebremedhin</>,
    subtitle: 'Laghare, Addis Ababa',
    location: 'https://maps.app.goo.gl/1ACRd6TiTj5c3mCQ8'
  },
  {
    id: 2,
    img: location2,
    title: <>Meetup</>,
    subtitle: 'Welo Sefer , Bole Rd, Addis Ababa',
    location: 'https://maps.app.goo.gl/FhuPtSfrvczcw8tn9'
  },
  {
    id: 3,
    img: location3,
    title: <>Sefer</>,
    subtitle: 'HayaHulet, Addis Ababa',
    location: 'https://maps.app.goo.gl/T8jD6ZzttU7BKQau5'
  },
  // {
  //   id: 4,
  //   img: location4,
  //   title: <>Kuriftu</>,
  //   subtitle: 'Entoto, Addis Ababa',
  //   location: 'https://maps.app.goo.gl/bCGpTg8kjBCGZuZF6'
  // },
  //   {
  //   id: 5,
  //   img: location5,
  //   title: <>Bishoftu</>,
  //   subtitle: 'Bishoftu , Oromia',
  //   location: ''
  // },
  //   {
  //   id: 6,
  //   img: location6,
  //   title: <>Historical</>,
  //   subtitle: 'Piassa, Addis Ababa',
  //   location: ''
  // },
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
              <div className="tp-featured-thumb-3 relative w-full h-64 rounded-lg overflow-hidden shadow-md group cursor-pointer">
                <Image
                  src={item.img}
                  alt="featured image"
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  className="group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>

              {/* Content */}
              <div className="tp-featured-content-3 text-center mt-4">
                <h3 className="tp-featured-title-3 text-xl font-semibold">
                  <Link href={item.location} className="hover:text-blue-600">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600">{item.subtitle}</p>

                {/* ✅ View Location Button using your familiar style */}
                <div className="mt-4 tp-category-more-3">
                  <Link href={item.location} className="tp-btn">
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
