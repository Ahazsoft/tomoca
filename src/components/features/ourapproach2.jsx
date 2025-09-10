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
                Our journey begins on smallholder farms in the Ethiopian highlands, where skilled farmers cultivate coffee in rich, fertile soils. Each coffee cherry is carefully handpicked at peak ripeness, ensuring optimal flavor and quality in every bean.
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
            After harvesting, cherries are delivered to cooperatives, where farmers collaborate to process, market, and maintain quality. This system ensures fair trade, supports sustainability, and strengthens local communities, allowing every Tomoca bean to reflect both care and integrity.          </p>
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

            <p>
              Tomoca coffee is carefully processed using two traditional methods that highlight the unique characteristics of each bean.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                
                <img src={WaterSplashIcon.src} alt="Water Process" style={{ width: '24px', height: '24px', marginTop: '4px' }} />

                <p style={{ margin: 0 }}>
                <strong>Washed Process (Water Process)</strong>  Also known as wet processing, cherries are pulped to remove the outer layer, then fermented, washed, and dried. This method produces clean, bright, and vibrant flavors that emphasize clarity and acidity.
                </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <img src={LeafIcon.src} alt="Natural Process" style={{ width: '24px', height: '24px', marginTop: '4px' }} />
                <p style={{ margin: 0 }}>
                <strong>Natural Process:</strong> Cherries are sun-dried with the fruit intact, allowing natural sugars to infuse the beans. This method yields bold, fruity, and full-bodied coffee profiles, capturing the richness of the fruit and the essence of the Ethiopian highlands.
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
            Every batch of Tomoca coffee undergoes rigorous testing to ensure it meets our exacting standards for flavor, balance, and aroma. From the farm to the roastery, we meticulously evaluate each bean, guaranteeing that only the finest coffee is selected for roasting and/or export.          </p>
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
