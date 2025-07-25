import React from 'react';

import darkRoastImg from '@assets/img/roasts/dark.png';
import mediumRoastImg from '@assets/img/roasts/medium.png';
import lightRoastImg from '@assets/img/roasts/light.png';

const SectionThree = () => {
  const containerStyle = {
    padding: '100px 60px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#C66335',
  };

  const introStyle = {
    maxWidth: '800px',
    marginBottom: '60px',
  };

  const roastGridStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    flex: 1,
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '50px',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '12px',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      {/* Section Header */}
      <div style={introStyle}>
        <h2 style={{ marginBottom: '20px' }}>The Roast: Where Science Meets Sensory Pleasure</h2>
        <p style={{ fontSize: '16px' }}>
          We roast with purpose—preserving the bean’s integrity while unlocking its hidden depths.
        </p>
      </div>

      {/* Roast Types */}
      <div style={roastGridStyle}>
        {/* Dark Roast */}
        <div style={cardStyle}>
          <img src={darkRoastImg.src} alt="Dark Roast" style={imageStyle} />
          <h3 style={headingStyle}>Bar Type (Dark Roast)</h3>
          <p style={paragraphStyle}>
            Bold, rich, and low in acidity, this roast delivers a deep flavor experience that stands up well in espresso or moka pot brews.
          </p>
        </div>

        {/* Medium Roast */}
        <div style={cardStyle}>
          <img src={mediumRoastImg.src} alt="Medium Roast" style={imageStyle} />
          <h3 style={headingStyle}>Famiglia Type (Medium Roast)</h3>
          <p style={paragraphStyle}>
            Smooth and balanced, this medium roast brings out sweet notes and a full body, ideal for pour-over and drip brewing methods.
          </p>
        </div>

        {/* Light Roast */}
        <div style={cardStyle}>
          <img src={lightRoastImg.src} alt="Light Roast" style={imageStyle} />
          <h3 style={headingStyle}>Turkish Type (Light Roast)</h3>
          <p style={paragraphStyle}>
            Delicate and nuanced, this roast is crafted for Turkish-style preparation and other precision brewing styles that highlight floral notes.
          </p>
        </div>

        <p style={{ fontSize: '16px', paddingLeft: '180px' }}>
          And because coffee is personal, we offer custom roasts tailored to regional preferences, brewing techniques, and your unique palate.
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
