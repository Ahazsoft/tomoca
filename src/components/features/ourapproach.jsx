'use client';

import React, { useState, useEffect } from 'react';



const SectionOne = () => {
  

  const containerStyle = {
    display: 'flex',
    gap: '120px',
    padding: '120px',
    alignItems: 'flex-start',
    backgroundColor: '#C66335',

  };

  const leftColumnStyle = {
    flex: 1,
  };

  const rightColumnStyle = {
    flex: 1,
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'contain',
    transition: 'opacity 0.5s ease-in-out',
  };

  const headingStyle = {
    marginBottom: '24px',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
    textAlign: 'justify',
  };

  return (
    <div style={containerStyle}>
      {/* <div style={leftColumnStyle}>
        <img
          key={index} // 👈 forces React to re-render the <img> element
          src={images[index].src} // 👈 .src is needed in Next.js for imported images
          alt={`Slide ${index + 1}`}
          style={imageStyle}
        />
      </div> */}
      <div style={rightColumnStyle}>
        <h2 style={headingStyle}>
          Born in the Forest. Crafted with Precision. Roasted to Perfection.
        </h2>
        <p style={paragraphStyle}>
          At the heart of every Tomoca blend is Ethiopia’s prized Arabica bean—sourced from regions like Kaffa, Jimma, Yirgacheffe, and Guji. 
          These beans thrive in rich volcanic soil, under the shade of native forests, where they develop bright floral notes, layered acidity, and a full, complex body.
          This isn’t coffee grown on vast, uniform plantations. It’s wild, biodiverse, and rooted in generations of tradition. 
          Forest coffee in Ethiopia grows naturally, nurtured by local smallholder farmers who pass down their knowledge and practices through the ages. 
          For these communities, coffee is not just a livelihood—it’s a way of life.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
