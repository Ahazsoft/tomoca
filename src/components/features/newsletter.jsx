'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import { ArrowRightSm, ArrowRightSmTwo } from "@/svg";





const Newsletter = () => {
  return (
<section
  className="newsletter-section text-white d-flex align-items-center justify-content-center"
  style={{
    backgroundImage: 'url(/assets/img/product/featured/subscribenow.jpg)', // 👉 Replace with your background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '75vh',
    position: 'relative',
    textAlign: 'center',
    padding: '2rem',
  }}
>
  <div
    style={{
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '3rem 2rem',
      borderRadius: '12px',
      maxWidth: '700px',
      width: '100%',
    }}
  >
    {/* Headline */}
    <h2
      style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: '#fff',
      }}
    >
      Good Days Follow Great Coffee.
    </h2>

    {/* Subscribe form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Subscribed!');
      }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}
    >
      <input
        type="email"
        placeholder="Enter your email"
        required
        style={{
          padding: '0.5rem 0.75rem',
          fontSize: '0.9rem',
          // borderRadius: '4px',
          border: 'none',
          outline: 'none',
          width: '220px',
        }}
      />
      {/* <button
        type="submit"
        style={{
          padding: '0.5rem 1rem',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          backgroundColor: '#D4B050',
          color: '#000',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Subscribe
      </button> */}
      <Link href="#" className="tp-btn">
        Subscribe
      </Link>
    </form>
  </div>
</section>






  );
};





export default Newsletter;