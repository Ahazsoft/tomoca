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

const events = [
  {
    id: 1,
    // title: 'ጊዜ በቶሞካ',
    // description: `A cultural journey at Legehar Train Station with curated music, history, and the finest Tomoca coffee.`,
    image: featured_4,
    buttonText: 'Explore',
    color: '#CB9458',      // Light Roast
    textColor: '#3B2314',  // Complementary dark brown
    buttonBgColor: '#3B2314', // For left button background
  },
  {
    id: 2,
    // title: 'Piassa Stories',
    // description: `Jazz-filled nights and heritage tales from Addis’ iconic Piassa district.`,
    image: featured_4,
    buttonText: 'Reserve Spot',
    color: '#8D5534',      // Medium Roast
    textColor: '#FFF4E6',  // Complementary cream
    buttonBgColor: '#FFF4E6',
  },
  {
    id: 3,
    // title: 'Coffee & Culture',
    // description: `Tomoca’s finest brews paired with poetry and music. A warm blend of aroma and artistry.`,
    image: featured_4,
    buttonText: 'Join Now',
    color: '#461C12',      // Dark Roast
    textColor: '#F3E5DC',  // Complementary beige
    buttonBgColor: '#F3E5DC',
  },
];

const Events = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const activeEvent = events[activeSlide];
  const backgroundColor = activeEvent.color;
  const textColor = activeEvent.textColor;
  const buttonBgColor = activeEvent.buttonBgColor;

  return (
    <section
      className="tp-events-area events-section"
      style={{
        padding: '60px 0',
        backgroundColor,
        transition: 'background-color 0.5s ease-in-out',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center gx-5">
          {/* Left Column */}
          <div className="col-lg-4 mb-5 mb-lg-0 d-flex flex-column justify-content-center">
            <div>
              <h2
                style={{
                  fontWeight: 'bold',
                  color: textColor,
                  marginBottom: '20px',
                  transition: 'color 0.3s ease-in-out',
                }}
              className="upcoming-header" >
                Upcoming Events
              </h2>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: textColor,
                  maxWidth: '300px',
                  marginBottom: '30px',
                  transition: 'color 0.3s ease-in-out',
                }}
              >
                Discover immersive gatherings blending coffee, culture, and connection.
              </p>
              <div className="event-arrows mt-3">
                <button
                  onClick={handlePrev}
                  className="arrow-btn me-3"
                  style={{ color: textColor, borderColor: textColor }}
                  aria-label="Previous event"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="arrow-btn"
                  style={{ color: textColor, borderColor: textColor }}
                  aria-label="Next event"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Carousel */}
          <div className="col-lg-8">
            <Slider ref={sliderRef} {...settings}>
              {events.map((event, index) => (
                <div key={event.id} className="carousel-item-wrapper">
                  <div
                    className={`event-card ${index === activeSlide ? 'active' : 'inactive'}`}
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '120%', // square & bigger
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                      backgroundColor: '#000',
                    }}
                  >
                    {/* Background Image */}
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        opacity: index === activeSlide ? 1 : 0.3,
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    />

                    {/* Overlay Content */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        color: event.textColor,
                        background: `linear-gradient(to top, ${event.color}cc, transparent)`,
                        zIndex: 2,
                      }}
                    >
                      <div style={{ marginTop: 'auto' }}>
                        <h3
                          style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            minHeight: '48px',
                          }}
                        >
                          {event.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '0.95rem',
                            marginBottom: '15px',
                            minHeight: '60px',
                          }}
                        >
                          {event.description}
                        </p>
                        <Link
                          href={`/event-details/${event.id}`}
                          className="tp-btn"
                          style={{
                            backgroundColor: event.textColor,
                            color: event.color,
                            padding: '8px 16px',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            width: 'fit-content',
                            transition: 'background-color 0.3s ease-in-out',
                          }}
                        >
                          {event.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .upcoming-header {
          font-weight: bold;
          margin-bottom: 20px;
          transition: color 0.3s ease-in-out;
          color: ${textColor};
        }
        .arrow-btn {
          background-color: transparent;
          border: 2px solid currentColor;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.3s ease-in-out;
        }

        .arrow-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .carousel-item-wrapper {
          padding: 0 12px; /* space between carousel items */
        }

        @media (max-width: 992px) {
          .event-card {
            padding-top: 110%;
          }

          .carousel-item-wrapper {
            padding: 0 8px;
          }
        }

        @media (max-width: 768px) {
          .event-card {
            padding-top: 100%;
          }

          .arrow-btn {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </section>
  );
};

export default Events;
