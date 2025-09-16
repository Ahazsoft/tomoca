import React from 'react';

import darkRoastImg from '@assets/img/roasts/dark.png';
import mediumRoastImg from '@assets/img/roasts/medium.png';
import lightRoastImg from '@assets/img/roasts/light.png';

const SectionThree = () => {
  const containerStyle = {
    padding: '0px 60px',
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
    fontSize: '16px',
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
        <div
          style={{
            // padding: '10px',
            margin: '0 auto',
            maxWidth: '600px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
            The Roast: It Smells Like Heaven
          </h2>
          <p style={{
            fontSize: '14px',
            textAlign: 'justify',
            width: '100%',
            margin: 0,
            lineHeight: '1.6'
          }}>
            At Tomoca, every roast is crafted to highlight the unique character of Ethiopian coffee. From bold and intense dark roasts, to balanced and sweet medium roasts, and delicate, refined light roasts, each type brings its own aroma and flavor to the cup. Whether enjoyed as an espresso, a filter brew, or a traditional Turkish coffee, our roasts promise a heavenly coffee experience.
          </p>
        </div>
      </div>


      {/* Roast Types */}
      <div style={roastGridStyle}>
        {/* Dark Roast */}
        <div style={cardStyle}>
          <div
            style={{
              // padding: '10px',
              // margin: '80px',
              maxWidth: '600px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxSizing: 'border-box',
            }}
          >
            <h2 style={{ marginBottom: '16px', textAlign: 'center', fontSize: '20px' }}>

              From Dark and Mysterious
            </h2>

            <h3 style={{ ...headingStyle, textAlign: 'center' }}>
              Bar Type (Dark roast - Intense flavors)
            </h3>

            <img
              src={darkRoastImg.src}
              alt="Dark Roast"
              style={imageStyle}
            />


            <div style={{ width: '100%' }}>
              <h4 style={{ marginBottom: '8px' }}>Flavor Profile</h4>
              <p style={{ ...paragraphStyle, textAlign: 'justify', margin: 0 }}>
                Bold, intense, and rich with a deep, robust character. The Bar Type offers a full-bodied taste with notes of dark chocolate, roasted nuts, and a hint of smokiness. The reduced acidity allows the coffee&apos;s strength to shine, making each sip smooth and satisfying.
              </p>

              
              <div style={{ width: '100%' }}>
                <h4 style={{ alignSelf: 'flex-start', marginTop: '48px' }}>Best Brewing Method</h4>

                <p style={{ ...paragraphStyle, textAlign: 'justify', margin: 0 }}>
                  Perfect for Espresso. The boldness of the Bar Type stands up well to the concentrated brewing process of espresso, delivering a powerful shot with a lingering finish. It&apos;s ideal for those who enjoy their coffee strong and assertive.
                </p>

              </div>
            </div>
          </div>
        </div>


        {/* Medium Roast */}
        <div style={cardStyle}>
          <div
            style={{
              // padding: '60px',
              // margin: '80px',
              maxWidth: '600px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxSizing: 'border-box',
            }}
          >
            <h2 style={{ marginBottom: '16px', textAlign: 'center', fontSize: '20px' }}>
              To Familiar and Smooth
            </h2>

            <h3 style={{ ...headingStyle, textAlign: 'center' }}>
              Famiglia Type (Medium Roast)
            </h3>

            <img
              src={mediumRoastImg.src}
              alt="Medium Roast"
              style={imageStyle}
            />


            <div style={{ width: '100%' }}>
              <h4 style={{ marginBottom: '8px' }}>Flavor Profile</h4>
              <p style={{ ...paragraphStyle, textAlign: 'justify', margin: 0 }}>
                Balanced and smooth with a medium body. The Famiglia Type presents a harmonious blend of sweet, nutty, and slightly fruity notes. Its brown color indicates that the beans have been roasted to the point where their natural sugars are caramelized, creating a pleasant, rounded sweetness.
              </p>

              <div style={{ width: '100%' }}>
                <h4 style={{ alignSelf: 'flex-start', marginTop: '24px' }}>Best Brewing Method</h4>

                <p style={{ ...paragraphStyle, textAlign: 'justify', margin: 0 }}>
                  Ideal for filter brewing, such as pour-over or drip coffee makers. The medium roast level preserves the beans&apos; inherent flavors while offering a well-rounded cup that is neither too strong nor too light. It&apos;s perfect for those who enjoy a nuanced cup with a touch of sweetness.
                </p>

              </div>
            </div>
          </div>
        </div>


        {/* Light Roast */}
        <div style={cardStyle}>
          <div
            style={{
              // padding: '60px',
              // margin: '80px',
              maxWidth: '600px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxSizing: 'border-box',
            }}
          >
            <h2 style={{ marginBottom: '16px', textAlign: 'center', fontSize: '20px' }}>

              All the way to a sensory ignitor
            </h2>

            <h3 style={{ ...headingStyle, textAlign: 'center' }}>
              Turkish Type (Light Roast)
            </h3>

            <img
              src={lightRoastImg.src}
              alt="Light Roast"
              style={imageStyle}
            />


            <div style={{ width: '100%' }}>
              <h4 style={{ marginBottom: '8px' }}>Flavor Profile</h4>

              <p style={{ ...paragraphStyle, textAlign: 'justify', margin: 0 }}>
                Delicate, aromatic, and refined with a subtle complexity. The Turkish Type retains much of the coffee bean&apos;s original flavors, offering a bright, lively cup with floral and citrus notes. The lighter roast ensures that the natural oils within the bean remain intact, contributing to a more nuanced and aromatic experience.
              </p>


              <div style={{ width: '100%' }}>
                <h4 style={{ alignSelf: 'flex-start', marginTop: '24px' }}>Best Brewing Method</h4>

                <p style={{ ...paragraphStyle, textAlign: 'justify', margin: 0 }}>
                  Specifically recommended for Turkish coffee preparation or other specialized brewing methods like AeroPress. The lighter roast is ideal for methods that highlight the coffee&apos;s subtleties, delivering a cup that is both refreshing and intricate, perfect for those who appreciate a lighter, more complex brew.
                </p>
              </div>
            </div>
          </div>
        </div>


        <p
          style={{
            fontSize: '16px',
            paddingLeft: '60px',
            paddingRight: '60px',
            // marginTop: '40px',
            textAlign: 'center',
            lineHeight: '1.6',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Oh &mdash; and by the way, we do custom roasts.<br />
          Coffee is personal. That&rsquo;s why we offer tailored roasts that honor regional preferences, cultural tastes, and individual palates. Whatever your flavor journey looks like &mdash; we&rsquo;re here to craft it with you.
        </p>


        
      </div>
    </div>
  );
};

export default SectionThree;
