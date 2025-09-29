'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// internal
import logo_white from '@assets/img/logo/TomocaCLW1.png';
import logo_dark from '@assets/img/logo/TomocaCLW1.png';
import { CartTwo, Menu, Search, Wishlist } from '@/svg';
import Menus from './header-com/menus';
import useSticky from '@/hooks/use-sticky';
import SearchBar from './header-com/search-bar';
import OffCanvas from '@/components/common/off-canvas';
import CartMiniSidebar from '@/components/common/cart-mini-sidebar';
import useCartInfo from '@/hooks/use-cart-info';
import { openCartMini } from '@/redux/features/cartSlice';

const HeaderThree = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  return (
    <>
    <header>
      <div
        id="header-sticky"
        className={`tp-header-area tp-header-style-transparent-white tp-header-transparent tp-header-sticky has-dark-logo tp-header-height ${sticky ? 'header-sticky' : ''}`}
      >
        <div className="tp-header-bottom-3 pl-35 pr-35">
          <div className="container-fluid">
            <div className="position-relative d-flex align-items-center justify-content-center w-100">

              {/* Centered Logo */}
              <div className="position-absolute start-50 translate-middle-x z-index-1">
                <div className="logo text-center">
                  <Link href="/home">
                    <Image className="logo-light" src={logo_white} alt="logo" />
                    <Image className="logo-dark" src={logo_dark} alt="logo" />
                  </Link>
                </div>
              </div>

              {/* Menu + Icons closer to center */}
              <div className="d-flex align-items-center" style={{ marginLeft: 'auto', marginRight: '15%' }}>
                <div className="main-menu menu-style-3 p-relative d-flex align-items-center">
                  <nav className="tp-main-menu-content">
                    <Menus />
                  </nav>
                </div>

                <div className="tp-header-action d-flex align-items-center ms-30">
                  <div className="tp-header-action-item d-none d-sm-block">
                    <button
                      onClick={() => dispatch(openCartMini())}
                      type="button"
                      className="tp-header-action-btn cartmini-open-btn"
                    >
                      <CartTwo />
                      <span className="tp-header-action-badge">{quantity}</span>
                    </button>
                  </div>
                  <div className="tp-header-action-item d-none d-sm-block">
                    <button
                      type="button"
                      className="tp-header-action-btn location-btn"
                      onClick={() => console.log("Location icon clicked")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                      </svg>
                    </button>
                  </div>

                  <div className="tp-header-action-item d-lg-none">
                    <button
                      onClick={() => setIsCanvasOpen(true)}
                      type="button"
                      className="tp-header-action-btn tp-offcanvas-open-btn"
                    >
                      <Menu />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>




      {/* search bar start */}
      <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      {/* search bar end */}

      {/* cart mini sidebar start */}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsCanvasOpen={setIsCanvasOpen} categoryType="beauty" />
      {/* off canvas end */}
    </>
  );
};

export default HeaderThree;