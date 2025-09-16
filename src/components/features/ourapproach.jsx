'use client';

import React, { useState, useEffect } from 'react';



const SectionOne = () => {
  

  const containerStyle = {
    display: 'flex',
    gap: '120px',
    // padding: '120px',
    alignItems: 'flex-start',
    backgroundColor: '#C66335',

  };

  const leftColumnStyle = {
    flex: 1,
  };

  const rightColumnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C66335', // adjust as needed
    height: '90vh',
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
        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            aspectRatio: '1 / 1',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>
            Born in the Forest. <br /> Crafted with Precision. Roasted to Perfection.
          </h2>
          <p
            style={{
              textAlign: 'justify',
              margin: 0,
              lineHeight: '1.7',
            }}
          >
            Every Tomoca blend starts with Ethiopia’s prized Arabica beans from regions like Kaffa, Jimma, Yirgacheffe, and Guji. Grown in rich volcanic soil under the shade of native forests, these beans develop bright floral notes, layered acidity, and a full, complex body. Unlike commercial plantations, forest coffee grows wild in biodiverse ecosystems, coexisting with native vegetation and creating a natural balance.
            Smallholder farmers, carrying knowledge passed down through generations, tend these beans with care. For them, coffee is more than a livelihood, it is a way of life. Their dedication ensures that each Tomoca roast reflects Ethiopia’s heritage, landscapes, and communities, transforming every cup into a true celebration of authenticity and craftsmanship.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SectionOne;
