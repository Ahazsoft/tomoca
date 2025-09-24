'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import featured_1 from '@assets/img/product/featured/featured-1.png';
import featured_2 from '@assets/img/product/featured/featured-2.png';
import featured_3 from '@assets/img/product/featured/featured-3.png';
import featured_4 from '@assets/img/product/featured/GizeBetomoca.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const StoreLocation = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Store</h1>
      <p style={styles.description}>
        Visit our store at the heart of the city. We're open every day from 8 AM to 9 PM!
      </p>
      
      {/* Google Map Embed */}
      <div style={styles.mapContainer}>
        <iframe
          title="Store Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197880381266!2d-122.42067938468325!3d37.77492927975974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e6e1dcd9%3A0xdda32ec3f0e73362!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          frameBorder="0"
          style={styles.map}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.1em',
    marginBottom: '20px',
  },
  mapContainer: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  map: {
    border: '0',
  },
};

export default StoreLocation;
