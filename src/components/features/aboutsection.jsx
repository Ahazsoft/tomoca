'use client';
import React from 'react';
import Image from 'next/image';


import featured_1 from '@assets/img/product/featured/featured-1.png';
import featured_2 from '@assets/img/product/featured/featured-2.png';
import featured_3 from '@assets/img/product/featured/featured-3.png';
import featured_4 from '@assets/img/product/featured/featured-4.png';
const About = () => {
  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '90vh', // Full viewport height per row
  };

  const columnStyle = {
    flex: 1,
    boxSizing: 'border-box',
  };

  const leftColumnStyle = {
    ...columnStyle,
    position: 'relative',  // required for next/image with fill
    padding: 0,             // remove padding to let image fill completely
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',     // ensures image doesn't spill
  };

  const rightColumnStyle = {
    ...columnStyle,
    backgroundColor: '#C66335', // Light blue
    
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    objectFit: 'contain',
    height: 'auto',
    borderRadius: '8px',
  };

  return (
    <div>
      {/* Row 1: Original layout */}
      <div style={rowStyle}>
        <div style={leftColumnStyle}>
        <Image
          src={featured_1}
          alt="Heritage Image"
          fill
          style={{ objectFit: 'cover' }}
          placeholder="blur"
        />
        </div>
        <div style={rightColumnStyle}>
            <div
              style={{
                padding: '120px',
                margin: '150px',
                maxWidth: '600px',      // limit width
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',   // center title horizontally
              }}
            >
              <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>
                Since 1953,
              </h2>
              <p style={{ textAlign: 'center', width: '100%', margin: 0 }}>
                Tomoca Coffee has stood as Ethiopia’s oldest and most iconic coffee roastery. Rooted in the birthplace of Arabica, we have spent over 70 years perfecting the art of roasting and sharing Ethiopia’s rich coffee heritage with the world.
              </p>
            </div>
          </div>
      </div>

      {/* Row 2: Mirrored layout */}
      <div style={rowStyle}>
        <div style={rightColumnStyle}>
          <div
              style={{
                padding: '60px',
                margin: '80px',
                maxWidth: '600px',      // limit width
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',   // center title horizontally
              }}
            ></div>
          <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>
            We are more than a brand
          </h2>
          <p style={{ textAlign: 'center', width: '50%', marginLeft: 190 }}>
            We are custodians of a centuries-old tradition. Our beans are grown in fertile highlands, handpicked by skilled farmers, 
            and roasted with care to bring out their true Ethiopian character. 
            At Tomoca, each cup tells a story: of the land, the people, and the timeless ritual of coffee.
          </p>
        </div>
        <div style={leftColumnStyle}>
          <Image
          src={featured_2}
          alt="Heritage Image"
          fill
          style={{ objectFit: 'cover' }}
          placeholder="blur"
        />
          
        </div>
      </div>

      {/* Row 3: Back to original */}
      <div style={rowStyle}>
        <div style={leftColumnStyle}>

          <Image
          src={featured_3}
          alt="Heritage Image"
          fill
          style={{ objectFit: 'cover' }}
          placeholder="blur"
        />

        </div>
        <div style={rightColumnStyle}>
              <div
              style={{
                padding: '60px',
                margin: '80px',
                maxWidth: '600px',      // limit width
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',   // center title horizontally
              }}
            ></div>

          <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>
            Our Unique Approach
          </h2>
          <p style={{ textAlign: 'center', width: '50%', marginLeft: 190 }}>
            Blends Ethiopian tradition with Italian roasting techniques to create a signature flavor profile—deep, nuanced, and unforgettable. 
            Tomoca was the first roastery in Addis Ababa to pioneer this meticulous method, elevating Ethiopian coffee to international standards without losing its soul.
          </p>
        </div>
      </div>
      <div style={rowStyle}>
        <div style={rightColumnStyle}>
          <div
              style={{
                padding: '60px',
                margin: '80px',
                maxWidth: '600px',      // limit width
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',   // center title horizontally
              }}
          ></div>
          <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>
            From our very first café,
          </h2>
          <p style={{ textAlign: 'center', width: '50%', marginLeft: 190 }}>
            We set out to modernize ancient practices while staying true to 
            the communal essence of coffee in Ethiopian culture—where conversation, 
            connection, and community bloom over a shared brew. 
            Today, that spirit continues to thrive in every Tomoca shop around the world.
          </p>
        </div>
        <div style={leftColumnStyle}>
          <Image
          src={featured_4}
          alt="Heritage Image"
          fill
          style={{ objectFit: 'cover' }}
          placeholder="blur"
        />
        </div>
      </div>
    </div>
  );
};

export default About;
