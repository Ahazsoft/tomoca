'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";

// Import images
import slider_bg_2 from "@assets/img/slider/3/slider-2.jpg";
import slider_bg_3 from "@assets/img/slider/3/slider-3.jpg";

// Direct Dropbox link for video
const videoURL = "https://dl.dropboxusercontent.com/scl/fi/463ecqzeih4ug5fe8g4m8/slider-2-fixed.mp4?rlkey=trylec7ysg3vkpd7gje54znm4";

// Slider settings
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".tp-slider-3-button-next",
    prevEl: ".tp-slider-3-button-prev",
  },
  pagination: {
    el: ".tp-slider-3-dot",
    clickable: true,
  },
};

// Slider data
const slider_data = [
  {
    id: 1,
    bg: { src: videoURL, type: "video" },
    subtitle: "Winter Collection 2023",
    title: "Be your kind of beauty",
  },
  {
    id: 2,
    bg: slider_bg_2,
    subtitle: "Top Brand Collection",
    title: "Use the best for you.",
  },
  {
    id: 3,
    bg: slider_bg_3,
    subtitle: "Awesome Beauty Products",
    title: "Don't Worry for Skincare",
  },
];

const BeautyBanner = () => {
  return (
    <section className="tp-slider-area p-relative z-index-1">
      <Swiper
        {...slider_setting}
        modules={[Navigation, EffectFade, Pagination]}
        className="tp-slider-active-3 swiper-container"
      >
        {slider_data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="tp-slider-item-3 tp-slider-height-3 p-relative black-bg d-flex align-items-center"
          >
            <div className="tp-slider-thumb-3 include-bg">
              {item.bg.type === "video" ? (
                <div className="tp-slider-video-wrapper">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="tp-slider-video"
                  >
                    <source src={item.bg.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div
                  className="tp-slider-thumb-3 include-bg"
                  style={{ backgroundImage: `url(${item.bg.src})` }}
                ></div>
              )}
            </div>

            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-8">
                  <div className="tp-slider-content-3">
                    <h3 className="tp-slider-title-3">
                      Celebrating Ethiopian Coffee
                    </h3>
                    <span>Since 1953</span>

                    <div className="tp-slider-feature-3 d-flex flex-wrap align-items-center p-relative z-index-1 mb-15">
                      {/* Feature items can go here */}
                    </div>
                    {/* Optional Button */}
                    {/* <div className="tp-slider-btn-3">
                      <Link href="/shop" className="tp-btn tp-btn-border tp-btn-border-white">
                        Discover Now
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="tp-swiper-dot tp-slider-3-dot d-sm-none"></div>
        <div className="tp-slider-arrow-3 d-none d-sm-block">
          <button type="button" className="tp-slider-3-button-prev"></button>
          <button type="button" className="tp-slider-3-button-next"></button>
        </div>
      </Swiper>
    </section>
  );
};

export default BeautyBanner;
