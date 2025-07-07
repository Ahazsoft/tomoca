'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import featured_1 from '@assets/img/product/featured/featured-1.png';
import featured_2 from '@assets/img/product/featured/featured-2.png';
import featured_3 from '@assets/img/product/featured/featured-3.png';
import featured_4 from '@assets/img/product/featured/GizeBetomoca.jpg';


import { ArrowRightSm, ArrowRightSmTwo } from "@/svg";




// featured data 
const featured_data = [
  {
    id: 1,
    img: featured_1,
    title: <>Historical - Piassa</>,
    subtitle: 'Wawel St, Addis Ababa',
    save: 72,
  },
  {
    id: 2,
    img: featured_2,
    title: <></>,
    subtitle: '',
    save: 98,
  },
  {
    id: 3,
    img: featured_3,
    title: <>Coffee 200gm - 999ETB</>,
    subtitle: '',
    save: 133,
  },
]



const Events = () => {
  return (
<section
  className="tp-events-area pt-70 pb-150 events-section"
  style={{
    height: '75vh',
    overflow: 'hidden',
    backgroundImage: 'url("/assets/img/product/featured/GizeBetomoca.jpg")', // update with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="container h-100">
    <div className="row h-100 gx-0">

      {/* Left Side: Text content */}
      <div
        className="col-lg-6 d-flex flex-column justify-content-center pe-5"
        style={{ height: '100%', color: '#fff' }}
      >
        <h2 className="tp-section-title-events mb-3" style={{ fontWeight: 'bold' }}>
          Upcoming Events
        </h2>
        <h4 className="tp-event-name mb-3" style={{ fontWeight: '600', color: '#fff'}}>
          ጊዜ በቶሞካ
        </h4>
        <p className="tp-event-place mb-4" style={{ fontSize: '1.1rem', color: '#fff' }}>
        Nestled within the historic Legehar Train Station, ጊዜ በቶሞካ is an experience like no other. 
        The sheer weight of history and culture greets you the moment you walk through the door and it only gets better from there. 
        With curated musical experiences, a cup of Tomoca Coffee in hand, like-minded patrons, and unique themes at every event, 
        ጊዜ በቶሞካ is designed to elevate your Tomoca experience to new heights.
        </p>
        <Link href="#" className="tp-btn" style={{ 
          width: 'fit-content', 
          padding: '10px 30px', }}>
          Explore Events <ArrowRightSmTwo />
        </Link>
      </div>

      {/* Right Side: Vertical RSVP button + Image */}
      <div
        className="col-lg-6 d-flex align-items-center justify-content-end"
        style={{ position: 'relative', height: '100%' }}
      >
        

        {/* Event Image */}
        <div
          style={{
            flex: '1 1 auto',
            height: '300px',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            marginLeft: '10px',
          }}
        >
          <Image
            src={featured_4} // replace with your event image
            alt="Event"
            fill
            style={{ objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>

        {/* Vertical RSVP Now Button */}
        {/* Vertical RSVP Now Button */}
        <button
          style={{
            writingMode: 'vertical-rl',
            WebkitWritingMode: 'vertical-rl',
            textOrientation: 'upright',
            padding: '15px 10px',
            fontWeight: 'bold',
            fontSize: '1rem',
            backgroundColor: 'transparent',
            border: '2px solid #D4B050',
            color: '#D4B050', // this will now apply
            cursor: 'pointer',
            height: '300px',
            marginLeft: '10px',
            borderRadius: '8px',
            lineHeight: 1.5,
          }}
          onClick={() => alert('RSVP clicked!')}
        >
          RSVP Now
        </button>

      </div>

    </div>

    {/* Spacer */}
    <div className="spacer" style={{ height: '30px' }}></div>

    {/* Bottom Button */}
    {/* <div className="row justify-content-end mb-55">
      <div className="col-lg-6 col-md-4 text-md-end text-start">
        <div className="tp-category-more-3">
          <Link href="/events" className="tp-btn">
            Explore Events <ArrowRightSmTwo />
          </Link>
        </div>
      </div>
    </div> */}
  </div>
</section>


  );
};







export default Events;