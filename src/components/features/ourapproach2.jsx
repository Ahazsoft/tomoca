'use client';
import React from 'react';
import Image from 'next/image';


import featured_1 from '@assets/img/product/featured/1.png';
import featured_2 from '@assets/img/product/featured/2.png';
import featured_3 from '@assets/img/product/featured/3.png';
import featured_4 from '@assets/img/product/featured/4.png';
import WaterSplashIcon from '@assets/img/icon/splash.svg'; // for Washed
import LeafIcon from '@assets/img/icon/leaf.png';        
const SectionTwo = () => {
  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '80vh', // Full viewport height per row
  };

  const columnStyle = {
    flex: 1,
    boxSizing: 'border-box',
  };

  const leftColumnStyle = {
    ...columnStyle,
    position: 'relative',  // required for next/image with fill
    padding: 0,             // remove padding to let image fill completely
    backgroundColor: '#C66335',
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
                Cultivation
              </h2>
              <p style={{ textAlign: 'center', width: '100%', margin: 0 }}>
                Grown on small farms in the Ethiopian highlands, cherries are handpicked at peak ripeness for optimal flavor.
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
            Cooperatives
          </h2>
          <p style={{ textAlign: 'center', width: '50%', marginLeft: 190 }}>
            Cherries are delivered to cooperatives, where farmers work together to process, market, and maintain quality—ensuring fair trade and sustainability.
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
            maxWidth: '600px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>Processing</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <img src={WaterSplashIcon.src} alt="Water Process" style={{ width: '24px', height: '24px', marginTop: '4px' }} />
                <p style={{ margin: 0 }}>
                <strong>Washed Process:</strong> Produces bright, clean flavors by fermenting and washing the cherry before drying.
                </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <img src={LeafIcon.src} alt="Natural Process" style={{ width: '24px', height: '24px', marginTop: '4px' }} />
                <p style={{ margin: 0 }}>
                <strong>Natural Process:</strong> Sun-dries the whole cherry, allowing sugars and fruit to infuse the bean—yielding bold, fruity notes.
                </p>
            </div>
            </div>
        </div>
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
            Quality Control 
          </h2>
          <p style={{ textAlign: 'center', width: '50%', marginLeft: 190 }}>
            Every batch is tested with meticulous care to ensure it meets our high standards for flavor, balance, and aroma.
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

export default SectionTwo;
