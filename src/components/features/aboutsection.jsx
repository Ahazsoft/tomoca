'use client';
import React from 'react';

const About = () => {
  const sectionStyle = {
    width: '100%',
    minHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  };

  const contentStyle = {
    width: '100%',
    maxWidth: '1206px',
    textAlign: 'center',
  };

  const headingStyle = {
    marginBottom: '16px',
    color: 'rgb(198, 99, 53)',
  };

  const paragraphStyle = {
    textAlign: 'center',
    color: '#000',
    lineHeight: '1.7',
  };

  return (
    <div>
      <div style={sectionStyle}>
        <div style={contentStyle}>
          <h2 style={headingStyle}>Since 1953</h2>
          <p style={paragraphStyle}>
            Since 1953, Tomoca Coffee has stood as Ethiopia's oldest and most iconic coffee roastery, rooted in the birthplace of Arabica and dedicated to perfecting the art of roasting for over 70 years.
            <br/>
            <br/>
            Established as TO.MO.CA. Coffee Pvt. Ltd. Co.—an abbreviation of the Italian "Torrefazione Moderna Café", meaning 'Modern Coffee Roasting', we pioneered modern coffee roasting and brewing in Ethiopia. Today, with more than a dozen coffee shops across Ethiopia and internationally, Tomoca continues to share the country’s rich coffee heritage with the world.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={contentStyle}>
          <h2 style={headingStyle}>We are more than a brand</h2>
          <p style={paragraphStyle}>
            We are custodians of a centuries-old tradition, carrying forward Ethiopia’s timeless coffee heritage with pride and purpose. Our beans are grown in fertile highlands, handpicked by skilled farmers, and roasted with care to reveal their true Ethiopian character, each cup telling a story of the land, the people, and the ritual of coffee itself.
            <br/>
            <br/>
            Since 1953, as Ethiopia’s first coffee roastery, our journey has always been about more than roasting beans; it has been about honoring the birthplace of coffee and sharing its richness with the world. Every roast, whether bright and floral or bold and rich, reflects Ethiopia’s diverse landscapes and cultures.
            <br/>
            <br/>
            Working hand-in-hand with smallholder farmers through fair trade and sustainable practices, we ensure every Tomoca coffee bean meets the highest standards of quality. Together, we craft a product that not only delights the palate but also celebrates the unbreakable bond between Ethiopia and coffee.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={contentStyle}>
          <h2 style={headingStyle}>Our Unique Approach</h2>
          <p style={paragraphStyle}>
            At Tomoca, our approach blends Ethiopia’s centuries-old coffee tradition with the precision of Italian roasting techniques, creating a signature flavor profile that is deep, nuanced, and unforgettable. This harmony between heritage and innovation allows us to bring out the natural complexity of Ethiopian beans while preserving their authenticity and soul. Every roast is a careful balance of art and science, where tradition meets craftsmanship to create a cup that speaks to both history and modern taste.
            <br/>
            <br/>Tomoca was the first roastery in Addis Ababa to pioneer this meticulous method, setting a new benchmark for quality and elevating Ethiopian coffee to international standards. What began in 1953 as a bold vision has grown into a legacy—one that continues to shape how the world experiences Ethiopian coffee today. By honoring our roots while embracing refinement, we ensure every sip delivers not just flavor, but the story of Ethiopia itself.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={contentStyle}>
          <h2 style={headingStyle}>From our very first café,</h2>
          <p style={paragraphStyle}>
            When we opened our doors in 1953, our vision was to modernize Ethiopia’s ancient coffee traditions while preserving their timeless soul. In Ethiopia, coffee has never been just a drink, it is a ceremony of togetherness, where conversation and community thrive. Each Tomoca café was built to carry that spirit forward, blending modern roasting and brewing with the warmth of culture and hospitality.
            <br/>
            <br/>
            That same spirit lives on today. From our cafés in Addis Ababa to locations all over Ethiopia, Africa & across the globe, Tomoca remains a place where people gather, stories are shared, and Ethiopia’s coffee heritage is celebrated in every sip.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
